import React from 'react';
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
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Terms & conditions</span>
                                        <input type="checkbox" className="checkbox checkbox-primary" />
                                    </label>
                                </div>
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

            {/* 
           const [error, setError] = useState('');

    const navigate = useNavigate();

    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const { signIn, setLoading } = useContext(AuthContext);

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
 */}
        </div>
    );
};

export default Register;

