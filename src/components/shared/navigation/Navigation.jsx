import { Link } from "react-router-dom";


const Navigation = () => {
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
                            <Link><li><a>Accounts</a></li></Link>
                        </ul>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;