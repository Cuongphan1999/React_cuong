import { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { BsGenderFemale } from "react-icons/bs";
import { CgGenderMale } from "react-icons/cg";
import { FaUserXmark } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ModifyStudentModal from "./ModifyStudentModal";
import Spinner from "../Spinner/Spinner";
export default function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [show, setShow] = useState(false)
  const [studentId, setStudentId] = useState(null)
  useEffect(() => { //cap nhat student list o day
    // fetch('https://6596b23a6bb4ec36ca0329d0.mockapi.io/student',{
    //    method: 'GET'}) //kieu PROMISE CHANGR
    //     .then((res) => res.json())
    //     .then((data) =>{
    //         setStudentList(data);
    //     })
    //async ham bat dong bo nhung ma bieu dien ra nhu dong bo->awaiting
    setLoading(true);
    async function getStudentList() {
      let StudentListRes = await fetch(`${import.meta.env.VITE_API_URI}/student` //dung env file
        //"https://student-app-api.vercel.app/student" //change url API tren VERCEL
        //https://6596b23a6bb4ec36ca0329d0.mockapi.io/student //dung Mockapi
        );
      let data = await StudentListRes.json();
      setStudentList(data);
      setLoading(false);
    }
    getStudentList();
  }, [selectedStudent, studentId]); //selectedstudent khi null thay doi gia tri thif useeffect render lai
  //StudentId update modify
  //console.log(selectedStudent);
  //console.log(studentList);
const handleRemoveStudent = (student) => {
  console.log(student);
  //swal thong bao delete student
  Swal.fire({
    title: "Are you sure to remove student?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirm",
  }).then(async (result) => {
    if (result.isConfirmed) {
      let removeStudentRes = await fetch(
        //`https://6596b23a6bb4ec36ca0329d0.mockapi.io/student/${student.id}`,
        `${import.meta.env.VITE_API_URI}/student/${student.id}`,
        {
        method: "DELETE"
      })
      let removeStudent = await removeStudentRes.json()
      if(removeStudent){
        toast.success('student removed succeed')
        setSelectedStudent(removeStudent) // update student list khi remove student
        
      }
    }
  });
  
}
const handleModifyStudent = (student) => {
  setShow(true)
  setStudentId(student?.id)
}

  return (
    <>
      {Loading ? (
        <Spinner/>
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
                      <Link to={`/student/${student.id}`}>
                        {student.fullname}
                      </Link>
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
                <td>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                  <FaUserXmark role="button" title="Remove student" className="me-2 text-danger " size={20}
                    onClick={() => handleRemoveStudent(student)} //xoa student
                  />
                    <FaUserGear role="button" title="Modify Student" className="me-2 text-primary " size={20}
                      //onClick={() => setShow(true)} //ban dau false -> sau khi click -> true
                        onClick={()=> handleModifyStudent(student)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
       <ModifyStudentModal show={show} handleClose={setShow} studentId={studentId} setStudentId={setStudentId}/>
    </>
  );
}
//? dung mang va obj: ? la kt co data/value/ khong neu co thi lam , con k co thi thoi
//38:35
//setStudentId : state me nen khi cap nhat thi nos update StudentId =>kt cho nao cap nhat state setStudentId nay

