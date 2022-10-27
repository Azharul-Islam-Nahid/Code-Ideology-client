import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Register = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const { createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('');
                form.reset();
                handleProfileUpdate(name, photoURL);
                handleEmailVerification();

                toast(
                    "Please verify your email address.\n\n Check your spam folder if you cannot find the verification mail.",
                    {
                        duration: 8000,
                    }
                );

                setError('');

                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }


    const handleProfileUpdate = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))

    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))

    }


    return (
        <div>
            <div className='hero min-h-screen bg-base-200 dark:bg-black dark:text-white'>
                <div className='hero-content flex-col'>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-5xl font-bold'>Register now!</h1>
                        <p className='py-6'>Register, using your email address and password. </p>
                    </div>
                    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-slate-800 dark:text-white'>
                        <form onSubmit={handleSubmit} className='card-body'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text dark:text-white'>Full name</span>
                                </label>
                                <input type='text' name='name' placeholder='full name' className='input input-bordered' required />
                                <label className='label'>
                                    <span className='label-text dark:text-white'>Photo URl</span>
                                </label>
                                <input type='text' name='photoURL' placeholder='Photo URL' className='input input-bordered' />
                                <label className='label'>
                                    <span className='label-text dark:text-white'>Email</span>
                                </label>
                                <input type='email' name='email' placeholder='email' className='input input-bordered' required />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text dark:text-white'>Password</span>
                                </label>
                                <input type='password' name='password' placeholder='password' className='input input-bordered' required />
                                <label className='label-text-alt link link-hover text-red-700'>
                                    {error}
                                </label>
                                <label className='label'>
                                    <Link to='/login' className='label-text-alt link link-hover text-blue-500'>Already have an account?</Link>
                                </label>
                            </div>
                            <div className='form-control mt-6'>
                                <button className='btn btn-primary'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

