import { FaPlus } from "react-icons/fa";
import Navigation from "../../../shared/navigation/Navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import axios from "axios";
import Expensecard from "../../../layouts/expenseCard/Expensecard";
import Swal from "sweetalert2";

const Expenselist = () => {

    const { user } = useContext(AuthContext)
    const [expenses, setExpenses] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/expense?email=${user.email}`)
            .then(res => res.json())
            .then(data => setExpenses(data))
    }, [user.email])


    //insert data to db;
    const handleexpenseLIst = event => {
        event.preventDefault();
        const form = event.target;
        const amount = form.amount.value;
        const category = form.category.value;
        const date = form.date.value;

        console.log(amount, category, date)


        if (user && user.email) {
            const expenseData = {
                email: user.email,
                amount,
                category,
                date
            }

            axios.post('http://localhost:5000/expense', expenseData)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log(res.data)
                    }
                })
        }


    }

    // delete data from db;

    const handledeleteExpense = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/expense/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = expenses.filter(expense => expense._id !== id)
                            setExpenses(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Navigation></Navigation>
            <div>
                <div className="flex justify-around items-center">
                    <div className="card">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-primary text-white" onClick={() => document.getElementById('my_modal_1').showModal()}><FaPlus></FaPlus>Add Expense</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box bg-white">
                                <div className="card w-full max-w-sm">
                                    <h2 className="text-center text-2xl fond-bold">Add Your expense</h2>
                                    <form onSubmit={handleexpenseLIst} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Amount</span>
                                            </label>
                                            <input type="number" name="amount" className="input input-bordered bg-white" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Category</span>
                                            </label>
                                            <input type="text" name="category" className="input input-bordered bg-white" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Date</span>
                                            </label>
                                            <input type="date" name="date" className="input input-bordered bg-white" required />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-accent">Add Record</button>
                                        </div>
                                        {/* {incomesuccess && <p className="text-orange-500 text-center">Record has been Added</p>} */}
                                    </form>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-xs">
                                <thead>
                                    <tr className="text-2xl text-black">
                                        <th>Category</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="tablebody">
                                    {
                                        expenses.map(expense => <Expensecard key={expense._id} expense={expense} handledeleteExpense={handledeleteExpense}></Expensecard>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expenselist;