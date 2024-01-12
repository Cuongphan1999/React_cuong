import { RiDashboard3Fill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
export default function Sidebar (){
    return(
        <aside style={{minWidth: "200px", height: '500px'}} className="me-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to={"/dashboard"} className="nav-link d-flex align-content-center">
                    <RiDashboard3Fill size={20} className="me-2"/>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/student"} className="nav-link d-flex align-content-center">
                    <PiStudentFill size={20} className="me-2"/>
                        Student
                    </NavLink>
                </li>

            </ul>
        </aside>
    )
}
//font-size: convention snakes-case
//{{}} : write convention camelCase
//chuyen trang: npm -i react-router-dom
//navlink: khi lick thi co active de tan dung chuyen trang se active"css color"