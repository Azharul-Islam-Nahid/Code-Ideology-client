import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Login = () => {


    const navigate = useNavigate();

    const [error, setError] = useState('');
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';


    const { signIn, providerLogin, setLoading } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const HandleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    const HandleGithubSignIn = () => {
        providerLogin(githubProvider)

            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please verify your email before logging in!');
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })

    }




    return (
        <div>
            <div className='hero min-h-screen bg-base-200 '>
                <div className='hero-content flex-col'>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-5xl font-bold'>Login now!</h1>
                        <p className='py-6'>Login,using your email address and password. </p>
                    </div>
                    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                        <form onSubmit={handleSubmit} className='card-body'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Email</span>
                                </label>
                                <input type='email' name='email' placeholder='email' className='input input-bordered' required />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Password</span>
                                </label>
                                <input type='password' name='password' placeholder='password' className='input input-bordered' required />
                                <label className='label-text-alt link link-hover text-red-700'>
                                    {error}
                                </label>
                                <label className='label'>
                                    <Link className='label-text-alt link link-hover text-blue-500'>Forgot password?</Link>
                                </label>
                            </div>
                            <div className='form-control mt-6'>
                                <button className='btn btn-primary'>Login</button>
                                <button onClick={HandleGoogleSignIn} className="btn btn-success mt-2"><FaGoogle className='mr-5'></FaGoogle>google</button>
                                <button onClick={HandleGithubSignIn} className="btn mt-2"><FaGithub className='mr-5'></FaGithub>github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;