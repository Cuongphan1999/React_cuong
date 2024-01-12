import { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { BsGenderFemale } from "react-icons/bs";
import { CgGenderMale } from "react-icons/cg";
export default function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch('https://6596b23a6bb4ec36ca0329d0.mockapi.io/student',{
    //    method: 'GET'}) //kieu PROMISE CHANGR
    //     .then((res) => res.json())
    //     .then((data) =>{
    //         setStudentList(data);
    //     })
    //async ham bat dong bo nhung ma bieu dien ra nhu dong bo->awaiting
    setLoading(true);
    async function getStudentList() {
      let StudentListRes = await fetch(
        "https://6596b23a6bb4ec36ca0329d0.mockapi.io/student"
      );
      let data = await StudentListRes.json();
      setStudentList(data);
      setLoading(false);
    }
    getStudentList();
  }, []);
  console.log(studentList);
  return (
    <>
      {Loading ? (
        <p>Loading</p>
      ) : (
        <table className="table table-bordered table-striped table-hover rounded-3 overflow-hidden">
          <caption></caption>
          <thead className="table-secondary">
            <tr>
              <th className="text-center">#ID</th>
              <th className="text-center">Fullname</th>
              <th className="text-center">Date of birth</th>
              <th className="text-center">Email</th>
              <th className="text-center">Mobile</th>
              <th className="text-center">Department</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList?.map((student) => (
              <tr key={student.id}>
                <td className="align-middle">{student.id}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar-sm" src={student.avatarUrl} alt="" />
                    <div className="d-flex flex-column">
                      <span>{student.fullname}</span>
                      {Boolean(student.gender) ? (
                        <BsGenderFemale className="text-primary" />
                      ) : (
                        <CgGenderMale className="text-warning" />
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-end align-middle">
                  {dayjs(student.dob).format("MMMM DD YYYY")}
                </td>
                <td className="text-end align-middle">{student.email}</td>
                <td className="text-end align-middle">{student.mobile}</td>
                <td>{student.department.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
//? dung mang va obj: ? la kt co data/value/ khong neu co thi lam , con k co thi thoi
//38:35
