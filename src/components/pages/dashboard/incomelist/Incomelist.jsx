import { FaPlus } from "react-icons/fa";
import Navigation from "../../../shared/navigation/Navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import axios from "axios";
import './incomelist.css';
import Incomecard from "../../../layouts/incomecard/Incomecard";
import Swal from "sweetalert2";
// import { useLoaderData } from "react-router-dom";


const Incomelist = () => {

    const { user } = useContext(AuthContext)
    const [incomesuccess, setincomeSuccess] = useState('');
    const [incomes, setIncomes] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/income?email=${user.email}`)
            .then(res => res.json())
            .then(data => setIncomes(data))
    }, [user.email])

    // insert income data to db from client site;

    const handleincomelist = event => {
        event.preventDefault();

        setincomeSuccess('');


        const form = event.target;
        const amount = form.amount.value;
        const category = form.category.value;
        const date = form.date.value;

        if (user && user.email) {

            const incomeData = {
                email: user.email,
                amount,
                category,
                date
            }

            axios.post('http://localhost:5000/income', incomeData)
                .then(res => {
                    if (res.data.insertedId) {
                        setincomeSuccess('Record has been Added')
                    }

                })
        }

    }

    // delete income list;

    const handleDelete = id => {
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
                axios.delete(`http://localhost:5000/income/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = incomes.filter(income => income._id !== id)
                            setIncomes(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="flex justify-around items-center">
                <div className="card">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-primary text-white" onClick={() => document.getElementById('my_modal_1').showModal()}><FaPlus></FaPlus>Add Income</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box bg-white">
                            <div className="card w-full max-w-sm">
                                <h2 className="text-center text-2xl fond-bold">Add Your income</h2>
                                <form onSubmit={handleincomelist} className="card-body">
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
                                    {incomesuccess && <p className="text-orange-500 text-center">{incomesuccess}</p>}
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
                                    incomes.map(income => <Incomecard
                                        key={income._id}
                                        income={income}
                                        handleDelete={handleDelete} >
                                    </Incomecard>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Incomelist;