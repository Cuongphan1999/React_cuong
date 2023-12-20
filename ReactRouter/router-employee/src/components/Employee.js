import { useLocation, useNavigate } from "react-router-dom";

const Employee = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const employees = [
        {
            id: 1,
            name: "TEM",
            age: 28
        },
        {
            id: 2,
            name: "VAN",
            age: 22
        },
        {
            id: 3,
            name: "HI",
            age: 76
        },
    ];
    const showDetail = (employee) => {
        navigate('/employee-detail', { state: employee });
    }
    console.log(location);
    return (
        <div className="container">
            {/* //Logged in info: {location.state.username} - {location.state.password} */}
            <hr />
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {employees.map((currentValue, index) => (
                        <tr key={index}>
                            <td>{currentValue.id}</td>
                            <td>{currentValue.name}</td>
                            <td>{currentValue.age}</td>
                            <td>
                                <button  onClick={(e) => { showDetail(currentValue) }}>Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Employee;