import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/UserContext';

const Login = () => {

    // const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     // console.log('Email = ', email + ', ', 'Password = ', password);

    //     signInUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(error => {
    //             console.error('error', error);
    //         })

    //     form.reset();
    //     navigate('/');
    // }
    return (
        <div>
            <div className='hero min-h-screen bg-base-200 '>
                <div className='hero-content flex-col'>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-5xl font-bold'>Login now!</h1>
                        <p className='py-6'>Login,using your email address and password. </p>
                    </div>
                    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                        <form onSubmit={''} className='card-body'>
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
                                <label className='label'>
                                    <Link className='label-text-alt link link-hover text-blue-500'>Forgot password?</Link>
                                </label>
                            </div>
                            <div className='form-control mt-6'>
                                <button className='btn btn-primary'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;