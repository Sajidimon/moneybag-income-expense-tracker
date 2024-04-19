
import { FcGoogle } from 'react-icons/fc';
import loginimg from '../../../assets/login.png'
import './register.css'


const Register = () => {
    return (
        <div className="md:flex">
            <div className='login-left md:w-1/2 md:min-h-screen p-20'>
                <div className="text-center">
                    <h1 className="text-5xl font-bold leading-tight">Track your money <br /> in Moneybag</h1>
                    <img src={loginimg} alt="" />
                    <p className="py-6">You can able to easily input and categorize expenses, track your spending over time, and analyze your financial habits.</p>
                </div>
            </div>
            <div>
                <div className="login-right md:w-full m-20 text-center">
                    <h2 className='text-3xl font-bold text-black'>Create Wallet account</h2>
                    <p className='text-black'>Sign up below to create your Wallet account</p>
                    <form className="mt-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Register</button>
                        </div>
                    </form>
                    <div className="divider">Or continue with</div>
                    <div className='google-icon'>
                        <FcGoogle></FcGoogle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;