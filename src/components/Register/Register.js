import React from 'react'; import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {


    return (
        <div>
            <div className='hero min-h-screen bg-base-200'>
                <div className='hero-content flex-col'>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-5xl font-bold'>Register now!</h1>
                        <p className='py-6'>Register, using your email address and password. </p>
                    </div>
                    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                        <form onSubmit={''} className='card-body'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>User name</span>
                                </label>
                                <input type='text' name='name' placeholder='name' className='input input-bordered' required />
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
                                    <Link to='/login' className='label-text-alt link link-hover text-blue-500'>Already have an account?</Link>
                                </label>
                            </div>
                            <div className='form-control mt-6'>
                                <button className='btn btn-primary'>Register</button><button onClick={''} className="btn btn-success mt-2"><FaGoogle className='mr-5'></FaGoogle>google</button><button onClick={''} className="btn mt-2"><FaGithub className='mr-5'></FaGithub>github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/UserContext';


const Register = () => {

    // const { createUser, signInWithGoogle } = useContext(AuthContext);


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log('Name = ', name + ', ', 'Email = ', email + ', ', 'Password = ', password);

    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(error => {
    //             console.error('error', error);
    //         })
    // }

    // const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(error => {
    //             console.error('error', error);
    //         })
    // }


    return (
        <div>
            
        </div>
    );
};

export default Register; 

*/}
        </div>
    );
};

export default Register;

