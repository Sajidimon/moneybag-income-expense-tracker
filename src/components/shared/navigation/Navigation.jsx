import { useContext } from "react";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const Navigation = () => {

    const { user } = useContext(AuthContext);
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
                                { user && <Link to='/dashboard/expenselist'><li><button className="btn btn-sm text-white"><SlLogout></SlLogout>Logout</button></li></Link>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;