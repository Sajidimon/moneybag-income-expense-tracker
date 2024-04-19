import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginimg from '../../../assets/login.png'
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {


    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;

        //login user with email & password;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                reset();
                navigate('/')
            })
        .catch(error=>console.error(error))

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
                    <h2 className='text-3xl font-bold text-black'>Login</h2>
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
                            <button className="btn btn-info">Log in</button>
                        </div>
                    </form>
                    <div className="divider">Or continue with</div>
                    <div className='google-icon'>
                        <FcGoogle></FcGoogle>
                        <p>Don't have account? <span className="text-orange-500 font-bold"><Link to='/login'>Sign Up</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;