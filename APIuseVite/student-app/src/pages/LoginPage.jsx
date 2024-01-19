import { FaUserShield } from "react-icons/fa6";
import AccountLayout from "../layouts/AccountLayout";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <AccountLayout>
      <div className="login-page d-flex flex-column justify-content-center align-items-center">
        <h6>
          <FaUserShield className="me-2" size={30} />
          Student App
        </h6>
        <form className="w-100">
            <div className="form-group mb-4">
                <label className="form-label d-flex">Email</label>
                <input type="email" className="form-control"/>

            </div>
            <div className="form-group mb-4">
                <label className="form-label d-flex">Password</label>
                <input type="password" className="form-control"/>

            </div>
            <div className="form-group mb-4 d-flex">
                <input type="submit" className="btn btn-primary flex-grow-1"/>
            </div>
            <div className="form-group mb-4 d-flex justify-content-center">
                <Link to={'/'}>Forgot Password?</Link>
            </div>

        </form>
      </div>
    </AccountLayout>
  );
}
////1:11:28
