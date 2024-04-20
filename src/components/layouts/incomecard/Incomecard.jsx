import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const Incomecard = ({ income, handleDelete }) => {

    const { category, amount, date, _id } = income;

    return (
        <>
            <tr className="text-black">
                <td>{category}</td>
                <td>{amount}</td>
                <td>{date}</td>
                <td>
                    <Link to={`/dashboard/updateincome/${_id}`}><button className="btn btn-sm btn-success text-white"><FaEdit></FaEdit>Edit</button></Link>
                </td>
                <td><button onClick={() => handleDelete(_id)} className="btn btn-sm btn-warning text-white"><MdDelete></MdDelete>Delete</button></td>
            </tr>
        </>
    );
};

export default Incomecard;