const students = [
    {
        id: '001',
        name: 'Maria Anders',
        Age: '22',
        address: 'Germany'
    },
    {
        id: '002',
        name: 'Francisco Chang',
        Age: '62',
        address: 'Mexico'
    },
    {
        id: '003',
        contact: 'Roland Mendel',
        Age: '24',
        address: 'Austria'
    },
    {
        id: '004',
        contact: 'Helen Bennett',
        Age: '21',
        address: 'UK'
    },
    {
        id: '005',
        name: 'Yoshi Tannamuri',
        Age: '27',
        address: 'Canada'
    },
    {
        id: '006',
        name: 'Giovanni Rovelli',
        Age: '66',
        address: 'Italy'
    }
];
export default function StudentInfor(props) { //Key prop được sử dụng để xác định mỗi hàng
    console.log(students);
    return (
        <div class='container'>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                { 
                
                    students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.Age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))
                    // students.map(student => (
                    //     <tr>
                    //       <td>{student.id}</td>
                    //       <td>{student.name}</td>
                    //       <td>{student.Age}</td>
                    //       <td>{student.address}</td>
                    //     </tr>
                    //   ))
                    
                }
            </tbody>
            </table>
            
        </div>
    )

}
