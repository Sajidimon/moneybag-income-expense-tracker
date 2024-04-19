import { FaPlus } from "react-icons/fa";
import Navigation from "../../../shared/navigation/Navigation";


const Incomelist = () => {
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
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Amount</span>
                                        </label>
                                        <input type="text" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-accent">Add Record</button>
                                    </div>
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
                                    <th>No</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-xl font-bold text-black">
                                    <th>1</th>
                                    <td>Buy foods</td>
                                    <td>BDT 300</td>
                                    <td>20 january 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Incomelist;