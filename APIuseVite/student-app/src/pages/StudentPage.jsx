import { IoPeople } from "react-icons/io5";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import MainLayout from "../layouts/MainLayout";
import { NavLink, Outlet, useLocation } from "react-router-dom";
export default function StudentPage() {
  const location = useLocation ();
  //console.log (location)
  const pathname = location.pathname.split('/').pop()
  //console.log(pathname)
  const isActive = pathname === 'student' || pathname === 'list'
  return (
    <MainLayout>
      <ul className='nav nav-tabs mb-2'>
          <li className="nav-link">
              <NavLink to={"/student/list"} className={`nav-link d-flex align-content-center ${isActive ? 'active': ''}`}>
                <IoPeople size={20} className="me-2"/>
                Student List
              </NavLink>
          </li>
          <li className="nav-link">
              <NavLink to={"/student/add"} className=" nav-link d-flex align-content-center">
              <MdOutlinePersonAddAlt1 size={20} className="me-2" />
                Create Student
              </NavLink>
          </li>
          {/* <li className="nav-link">
              <NavLink to={#} className="nav-link d-flex align-content-center">
             < BsFillPersonLinesFill size={20} className="me-2"/>
                Student Details
              </NavLink>
          </li> */}
      </ul>
      <Outlet/> 
    </MainLayout>
  );
}
//split chuyen chuoi thanh mang
//pop xoa phan tu cuoi mang va tra phan tu do