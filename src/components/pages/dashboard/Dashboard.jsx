import { Link } from "react-router-dom";
import Navigation from "../../shared/navigation/Navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {


    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/income')
            .then(res => res.json())
            .then(data => setIncomes(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/expense')
            .then(res => res.json())
            .then(data => setExpenses(data))
    }, [])

    return (
        <div className="md:container md:mx-auto">
            <Navigation></Navigation>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="card text-neutral-content shadow-xl">
                    <div className="card-body items-center text-center">
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
                                    {
                                        incomes.map((income, index) => <tr key={income._id}>
                                            <th>{index + 1}</th>
                                            <td>{income.category}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Link to='/dashboard/incomelist'><button className="btn btn-primary mx-auto btn-sm mt-5">All income</button></Link>
                    </div>
                </div>
                <div className="card text-neutral-content shadow-xl">
                    <div className="card-body items-center text-center">
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

                                    {
                                        expenses.map((expense, index) => <tr key={expense._id}>
                                            <th>{ index + 1}</th>
                                            <td>{ expense.category}</td>
                                        </tr>)
                                    }

                                    
                                </tbody>
                            </table>
                        </div>
                        <Link to='/dashboard/expenselist'><button className="btn btn-primary mx-auto btn-sm mt-5">All expense</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;