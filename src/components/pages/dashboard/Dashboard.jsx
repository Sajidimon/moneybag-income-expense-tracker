import { Link } from "react-router-dom";
import Navigation from "../../shared/navigation/Navigation";

const Dashboard = () => {
    return (
        <div className="md:container md:mx-auto">
            <Navigation></Navigation>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="card text-neutral-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className="card-actions justify-end">
                            <div className="overflow-x-auto">
                                <table className="table text-black">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className="text-3xl text-black">Lists of income</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Link to='/dashboard/incomelist'><button className="btn btn-primary mx-auto btn-sm mt-5">All income</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card text-neutral-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className="card-actions justify-end">
                            <div className="overflow-x-auto">
                                <table className="table text-black">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className="text-3xl text-black">Lists of expense</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Link to='/dashboard/expenselist'><button className="btn btn-primary mx-auto btn-sm mt-5">All expense</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card text-neutral-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl text-black">Cash flows</h2>
                        <div className="flex justify-around gap-64">
                            <div className="pl-4">
                                <h2 className="font-bold text-black text-2xl">Income</h2>
                                <p className="mt-16 font-bold text-black text-2xl">Expense</p>
                            </div>
                            <div className="pr-4">
                                <h2 className="text-xl">320tk</h2>
                                <p className="mt-16 text-xl">220tk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;