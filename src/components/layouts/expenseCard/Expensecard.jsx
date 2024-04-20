import { Link } from "react-router-dom";


const Expensecard = ({ expense, handledeleteExpense }) => {
    

    const { amount, category, date, _id } = expense;

    return (
        <>
            <tr className="text-black">
                <td>{ category}</td>
                <td>{ amount}</td>
                <td>{ date}</td>
                <td><Link to={`/dashboard/updateexpense/${_id}`}><button className="btn btn-success btn-sm text-white">Edit</button></Link></td>
                <td><button onClick={() => handledeleteExpense(_id)} className="btn btn-warning btn-sm text-white">Delete</button></td>
            </tr>
        </>
    );
};

export default Expensecard;