import { useContext } from "react";
import { SlLogout } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const Navigation = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/login');
            })

            .catch(error => console.error(error))
    }

    return (
        <div>
            <div>
                <div className="navbar">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl text-orange-500">MoneyBag</a>
                        <ul className="menu menu-horizontal px-1 text-black font-semibold">
                            <Link to='/dashboard'><li><a>Dashboard</a></li></Link>
                            <Link to='/dashboard/incomelist'><li><a>All Income</a></li></Link>
                            <Link to='/dashboard/expenselist'><li><a>All Expense</a></li></Link>
                        </ul>
                    </div>
                    <div className="flex-none">
                        <div className="">
                            <ul className="">
                                {
                                    user ?  <li>
                                        <button onClick={handleLogout} className="btn btn-sm text-white"><SlLogout></SlLogout>Logout</button>
                                    </li> : <p></p>
                                }
                                
                                   
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;