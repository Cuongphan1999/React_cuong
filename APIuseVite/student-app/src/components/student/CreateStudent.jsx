import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios"
import DepartmentService from "../../service/department-service";





//yup: dinh nghia ra cac tap hop rang buoc=>nem obj-> user form({resolver: yupResolver(schema)})
//yupresolver:
const schema = yup.object({
  fullname: yup.string().required(),
  dob: yup.date().required().typeError("dob is a required field"),
  mobile: yup.string().required(),
  gender: yup.bool().required(),
  email: yup.string().email().required(),
  department: yup.string().required(), //department chon string
  avatarUrl: yup.string().url().required(),
});

export default function CreateStudent() {
  const [DepartmentList, setDepartmentList] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    //dung promise
    //     fetch('https://6596b23a6bb4ec36ca0329d0.mockapi.io/department',{
    //    method: 'GET'})
    //     .then((res) => res.json())
    //     .then((data) =>{
    //         setDepartmentList(data);
    //     })
    async function getDepartmentList() {
      // let departmentListRes = await fetch(
      //   //"https://6596b23a6bb4ec36ca0329d0.mockapi.io/department"
      //   `${import.meta.env.VITE_API_URI}/department`
      // );
      // let data = await departmentListRes.json();
      // setDepartmentList(data);
      //su dung Axios thay fetch
      //let departmentListRes = await axios.get(`${import.meta.env.VITE_API_URI}/department`);
      let departmentListRes = await DepartmentService.getDepartmentList()
      console.log(departmentListRes.data);
      //setDepartmentList(departmentListRes?.data);
      setDepartmentList(departmentListRes.data) //bo data ->su dung intercepters->api client
    }
    getDepartmentList();
    //console.log(DepartmentList);
  }, []);
  //register: chiu trach nhiem dang ky, handlersubmit chiu trach nhiem khi click submit->tao student
  // reset: reset form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleCreateStudent = async (values) => { //add them async thif ham await moi running
    values = {
      ...values,
      department: values.department && JSON.parse(values.department), //convert obj sang string
    };
    //console.log(values)
    // setIsCreating(true)
    // //call api -> create new student
    // fetch("https://6596b23a6bb4ec36ca0329d0.mockapi.io/student", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", //DANG JSON
    //   },
    //   body: JSON.stringify(values) // chuyen ve json
    // }).then(res => res.json)
    //   .then(data => {
    //     console.log(data)
    //     reset() //rest form
    //     //toast.success('Student created successfully', {theme:'l'}) //thong bao success
    //     //toast.success('Wow so easy!', {theme: "light",});
    //   })
    //   setIsCreating(false)


    try {
      setIsCreating(true)
      let createStudentRes = await fetch(
        //'https://6596b23a6bb4ec36ca0329d0.mockapi.io/student', 
        `${import.meta.env.VITE_API_URI}/student`,
        {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
      })
      let result = await createStudentRes.json();
     //let result = await StudentService.createStudent(values))
      if (result) {
          reset()
          toast.success ('Student created succeed', { theme: 'light' })
          
      }
      setIsCreating(false)
  } catch (error) {
      toast.error('Something went wrong, please contact administrator')
  }
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateStudent)}
      className="border rounded p-2"
    >
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 text-start">
          <div className="form-group mb-2 ">
            <label className="form-label">Fullname</label>
            <input
              type="text"
              className={`form-control ${
                errors.fullname?.message ? "is-invalid" : ""
              }`}
              placeholder="Fullname..."
              {...register("fullname")}
            />
            <span className="invalid-feedback">{errors.fullname?.message}</span>
          </div>
          <div className="form-group mb-2">
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Day of birth</label>
                <input
                  type="Date"
                  className={`form-control ${
                    errors.dob?.message ? "is-invalid" : ""
                  }`}
                  placeholder="Fullname..."
                  {...register("dob")}
                />
                <span className="invalid-feedback">{errors.dob?.message}</span>
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className={`form-check-input ${
                        errors.gender?.message ? "is-invalid" : ""
                      }`}
                      value={true}
                      {...register("gender")}
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className={`form-check-input ${
                        errors.gender?.message ? "is-invalid" : ""
                      }`}
                      value={false}
                      {...register("gender")}
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mb-2 ">
            <label className="form-label">Mobile</label>
            <input
              type="mobile"
              className={`form-control ${
                errors.mobile?.message ? "is-invalid" : ""
              }`}
              placeholder="Mobile..."
              {...register("mobile")}
            />
            <span className="invalid-feedback">{errors.mobile?.message}</span>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 text-start">
          <div className="form-group mb-2 ">
            <label className="form-label">Email</label>
            <input
              type="Email"
              className={`form-control ${
                errors.email?.message ? "is-invalid" : ""
              }`}
              placeholder="Email..."
              {...register("email")}
            />
            <span className="invalid-feedback">{errors.email?.message}</span>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Department</label>
            <select
              className={`form-select ${
                errors.department?.message ? "is-invalid" : ""
              }`}
              defaultValue={""}
              {...register("department")}
            >
              <option value={""} disabled>
                Please select a department
              </option>
              {DepartmentList?.map((depart) => (
                <option value={JSON.stringify(depart)} key={depart.id}>
                  {depart.name}
                </option>
              ))}
            </select>
            <span className="invalid-feedback">
              {errors.department?.message}
            </span>
          </div>
          <div className="form-group mb-2 ">
            <label className="form-label">Avatar URL</label>
            <input
              type="url"
              className={`form-control ${
                errors.avatarUrl?.message ? "is-invalid" : ""
              }`}
              placeholder="Avatar URL..."
              {...register("avatarUrl")}
            />
            <span className="invalid-feedback">
              {errors.avatarUrl?.message}
            </span>
          </div>
          <div className="form-group mb-2 ">
            <label className="form-label"></label>
            <div className="d-flex">
              {
                isCreating ? (
                  <button className="btn btn-success btn-sm d-flex align-items-center justify-content-center flex-grow-1 me-2" disabled>
                    Creating
                  </button>
                ) :(
                  <button
                type="submit"
                className="btn btn-success btn-sm d-flex align-items-center justify-content-center flex-grow-1 me-2">
                <FaUserPlus className="me-2 " />
                Create
              </button>
                )
              }
              
              <button
                type="button"
                className="btn btn-dark btn-sm d-flex align-items-center justify-content-center flex-grow-1"
                onClick={() => reset()}
              >
                <IoMdClose className="me-2" />
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
