import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useForm} from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
  fullname: yup.string().required()
}) 


export default function CreateStudent() {
  const [DepartmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    //dung promise 
    //     fetch('https://6596b23a6bb4ec36ca0329d0.mockapi.io/department',{
    //    method: 'GET'})
    //     .then((res) => res.json())
    //     .then((data) =>{
    //         setDepartmentList(data);
    //     })
    async function getDepartmentList() {
      let departmentListRes = await fetch(
        "https://6596b23a6bb4ec36ca0329d0.mockapi.io/department"
      );
      let data = await departmentListRes.json();
      setDepartmentList(data);
    }
    getDepartmentList();
    console.log(DepartmentList);
  }, []);

  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  })
  const handleCreateStudent = (values) => {
    values = {
        ...values,
        department: values.department && JSON.parse(values.department)
    }
    console.log(values)
  }



  return (
    <form onSubmit={handleSubmit(handleCreateStudent)} className="border rounded p-2">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 text-start">
          <div className="form-group mb-2 ">
            <label className="form-label">Fullname</label>
            <input
              type="text"
              className={`form-control ${errors.fullname?.message ? "is-invalid": ""}`}
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
                  className="form-control"
                  placeholder="Fullname..."
                  {...register("dob")}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input type="radio" 
                    className="form-check-input" 
                    value={true}
                    {...register("gender")}/>
                    <label className="form-check-label">Male</label>
                   
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" 
                    className="form-check-input" 
                    value={false} 
                    {...register("gender")}/>
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
              className="form-control"
              placeholder="Mobile..."
              {...register("mobile")}
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 text-start">
          <div className="form-group mb-2 ">
            <label className="form-label">Email</label>
            <input
              type="Email"
              className="form-control"
              placeholder="Email..."
              {...register("email")}
            />
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Department</label>
            <select className="form-select" defaultValue={''} 
            {...register("department")}>
              <option value={""} disabled> 
                Please select a department
              </option>
              {DepartmentList?.map((depart) => (
                <option value={JSON.stringify(depart)} key={depart.id}>{depart.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group mb-2 ">
            <label className="form-label">Avatar URL</label>
            <input
              type="url"
              className="form-control"
              placeholder="Avatar URL..."
              {...register("avatarUrl")}
            />
          </div>
          <div className="form-group mb-2 ">
            <label className="form-label"></label>
            <div className="d-flex">
              <button type="submit" className="btn btn-success btn-sm d-flex align-items-center justify-content-center flex-grow-1 me-2">
                <FaUserPlus className="me-2 " />
                Create
              </button>
              <button type="button" className="btn btn-dark btn-sm d-flex align-items-center justify-content-center flex-grow-1"
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
