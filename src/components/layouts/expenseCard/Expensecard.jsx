

const Expensecard = ({ expense, handledeleteExpense }) => {
    

    const { amount, category, date, _id } = expense;

    return (
        <>
            <tr className="text-black">
                <td>{ category}</td>
                <td>{ amount}</td>
                <td>{ date}</td>
                <td><button className="btn btn-success btn-sm text-white">Edit</button></td>
                <td><button onClick={() => handledeleteExpense(_id)} className="btn btn-warning btn-sm text-white">Delete</button></td>
            </tr>
        </>
    );
};

export default Expensecard;