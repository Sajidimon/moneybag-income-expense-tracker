import { Link, useNavigate } from "react-router-dom";
import loginimg from '../../../assets/login.png'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Sociallogin from "../../sociallogin/Sociallogin";

const Login = () => {


    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlelogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user)

        //login user with email & password;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                    navigate('/dashboard')
                
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
                    <form onSubmit={handlelogin} className="mt-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input name="password" type="password" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Log in</button>
                        </div>
                    </form>
                    <div className="divider">Or continue with</div>
                    <Sociallogin></Sociallogin>
                    <p>Do not have account? <span className="text-orange-500 font-bold"><Link to='/register'>Sign Up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;