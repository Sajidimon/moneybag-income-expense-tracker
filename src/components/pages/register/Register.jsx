import { useForm } from "react-hook-form"
import { FcGoogle } from 'react-icons/fc';
import loginimg from '../../../assets/login.png'
import './register.css'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;

        //create user with email & password;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user) {
                    alert('Registration is successfull');
                    reset();
                    navigate('/dashboard')
                }

            })
            .catch(error => console.error(error))

    }

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
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input {...register("email")} type="email" name="email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input {...register("password", { minLength: 6, maxLength: 20 })} name="password" type="password" className="input input-bordered bg-white" required />
                            {errors.password && <span>Password must be greater than 6 character</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Register</button>
                        </div>
                    </form>
                    <div className="divider">Or continue with</div>
                    <div className='google-icon'>
                        <FcGoogle></FcGoogle>
                        <p>Already have account? <span className="text-orange-500 font-bold"><Link to='/login'>Log In</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;