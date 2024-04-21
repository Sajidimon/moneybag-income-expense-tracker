import { useLoaderData } from "react-router-dom";
import Navigation from "../../shared/navigation/Navigation";
import Swal from "sweetalert2";

const Updateexpense = () => {

    const singleexpenseData = useLoaderData();

    const { _id, amount, category, date } = singleexpenseData;

    const handleUpdateExpense = event => {
        event.preventDefault();
        const form = event.target;
        const amount = form.amount.value;
        const category = form.category.value;
        const date = form.date.value;
        const updateExpensedata = { amount, category, date }

        fetch(`https://moneybag-income-expense-tracker-server.onrender.com/expense/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateExpensedata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Expense updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }


    return (
        <>
            <div>
                <Navigation></Navigation>
                <div className="w-1/2 mx-auto min-h-screen">
                    <div className="hero-content lg:flex-row">
                        <div className="card w-full shadow-2xl">
                            <h2 className="text-center text-2xl mt-8 font-bold">Edit Your Expense</h2>
                            <form onSubmit={handleUpdateExpense} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Amount</span>
                                    </label>
                                    <input type="number" name="amount" defaultValue={amount} className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" defaultValue={date} className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update Record</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Updateexpense;