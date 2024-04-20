import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Sociallogin = () => {

    const { googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                if (user?.email) {
                    navigate('/dashboard')
                }
        })
    }


    return (
        <>
            <div className='google-icon'>
                <button onClick={handleGoogleLogin}><FcGoogle></FcGoogle></button>
            </div>
        </>
    );
};

export default Sociallogin;