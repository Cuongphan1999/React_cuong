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
import { FaSearch } from "react-icons/fa";
export default function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [show, setShow] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const [filters, setFilters] = useState({
    searchText: "",
    sort: "fullname",
    order: "asc",
    page: 1,
    limit: 10,
    direction: "next",
  });
  const [totalPages, setTotalPages] = useState(0);
  const [keyword, setKeyword] = useState(null)
  useEffect(() => {
    //cap nhat student list o day
    // fetch('https://6596b23a6bb4ec36ca0329d0.mockapi.io/student',{
    //    method: 'GET'}) //kieu PROMISE CHANGR
    //     .then((res) => res.json())
    //     .then((data) =>{
    //         setStudentList(data);
    //     })
    //async ham bat dong bo nhung ma bieu dien ra nhu dong bo->awaiting
    setLoading(true);
    async function getStudentList() {
      let studentListRes = await fetch(`${import.meta.env.VITE_API_URI}/student?_page=${filters?.page}&_limit=${filters?.limit}&_sort=${filters.sort}&_order=${filters.order}&fullname_like=${filters.searchText}`)
      let data = await studentListRes.json()
      setStudentList(data)
      setLoading(false)
    }
    getStudentList();
  }, [selectedStudent, studentId, filters]); //selectedstudent khi null thay doi gia tri thif useeffect render lai
  //StudentId update modify
  //console.log(selectedStudent);
  //console.log(studentList);
  // console.log(filters.page)
//useEffect dung total page
  useEffect(() => {
    async function getTotalRow() {
      let TotalRowRes = await fetch(`${import.meta.env.VITE_API_URI}/student?fullname_like=${filters.searchText}`);//search name
      let data = await TotalRowRes.json(); //data la arr
      let totalPages = Math.ceil(Number(data.length) / Number(filters.limit)); //arr bao nhieu phan tu lay length-> page 10 chia 37 user = 3.7 (match cell: )
      console.log(totalPages);
      setTotalPages(totalPages);
    }
    getTotalRow();
  }, [filters.limit, filters.searchText]); //filters.limit: tinh 10 con 2 trang, 30 con 1 trang 
 

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
            method: "DELETE",
          }
        );
        let removeStudent = await removeStudentRes.json();
        if (removeStudent) {
          toast.success("student removed succeed");
          setSelectedStudent(removeStudent); // update student list khi remove student
        }
      }
    });
  };
  const handleModifyStudent = (student) => {
    setShow(true);
    setStudentId(student?.id);
  };

  const handleNextPage = () => {
    if (filters.page < totalPages) {
      setFilters({
        ...filters,
        page: Number(filters.page) + 1,
        direction: "next",
      });
    }
  };
  const handlePreviousPage = () => {
    if (Number(filters.page) > 1) {
      setFilters({
        ...filters,
        page: Number(filters.page) - 1,
        direction: "prev",
      });
    }
  };
  const handleChangePageSize = (e) => {
    setFilters({
      ...filters,
      limit: Number(e.target.value),
    });
    //console.log(e.target.value)
  };
  const handleChangeFiled = (e) => {
    setFilters({
      ...filters,
      sort: e.target.value,
    });
  };
  const handleChangeSort = (e) => {
    setFilters({
      ...filters,
      order: e.target.value,
    });
  };
  //console.log(filters)

const handleSearch = (e) => {
  e.preventDefault() // preventdefault tinh chat mac dinh(khi bam nut submit truyen len server ->nen dung preventdefault k gui len server)
  setFilters({ //khi bam submit ->cap nhat state
    ...filters,
    searchText: keyword
  })
}
  return (
    <>
      {/* search ; from trong search khi enter ==submit */}
      <div onSubmit={handleSearch} className="d-flex align-items-center justify-content-between my-2">
        <form className="d-flex align-items-center w-50"> 
          <input
            type="text"
            className="form-control-sm "
            placeholder="Search..."
            onInput={(e) => setKeyword(e.target.value)}
            //onInput={(e) =>  setFilter({ ...filters, searchText: e.target.value})} //nhap toi dau search toi do
          />
          <FaSearch
            size={20}
            className="text-secondary"
            style={{ marginLeft: "-24px" }}
          />
        </form>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center me-2">
            <span className="me-2">Field</span>
            <select
              className="form-select form-select-sm"
              defaultValue={"fullname"}
              onChange={handleChangeFiled}
            >
              <option value={"fullname"}>Fullname</option>
              <option value={"email"}>email</option>
            </select>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-2">Sort</span>
            <select
              className="form-select form-select-sm"
              defaultValue={"asc"}
              onChange={handleChangeSort}
            >
              <option value={"asc"}>Ascendent</option>
              <option value={"desc"}>Descendent</option>
            </select>
          </div>
        </div>
      </div>

      {Loading ? (
        <Spinner />
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
                    <FaUserXmark
                      role="button"
                      title="Remove student"
                      className="me-2 text-danger "
                      size={20}
                      onClick={() => handleRemoveStudent(student)} //xoa student
                    />
                    <FaUserGear
                      role="button"
                      title="Modify Student"
                      className="me-2 text-primary "
                      size={20}
                      //onClick={() => setShow(true)} //ban dau false -> sau khi click -> true
                      onClick={() => handleModifyStudent(student)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* page */}
      <div className="d-flex justify-items-center justify-content-between">
        <ul className="pagination">
          <li
            className={`page-item me-2 ${Number(filters.page) <= 1 ? "disabled" : filters.direction === "prev" ? "active" : ""} `}
          >
            <button onClick={handlePreviousPage} className={"page-link"}>
              Previous
            </button>
          </li>
          <li className="page-item me-2">
            <button
              onClick={handleNextPage}
              className={`page-link ${Number(filters.page) >= totalPages ? "disabled" : filters.direction === "next" ? "active" : ""} `}
            >
              Next
            </button>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <span style={{ width: "150px" }}>Items per page</span>
          <select
            className="form-select form-select-sm"
            style={{ width: "100px" }}
            defaultValue={10}
            onChange={handleChangePageSize}
          >
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      <ModifyStudentModal
        show={show}
        handleClose={setShow}
        studentId={studentId}
        setStudentId={setStudentId}
      />
    </>
  );
}
//? dung mang va obj: ? la kt co data/value/ khong neu co thi lam , con k co thi thoi
//38:35
//setStudentId : state me nen khi cap nhat thi nos update StudentId =>kt cho nao cap nhat state setStudentId nay
