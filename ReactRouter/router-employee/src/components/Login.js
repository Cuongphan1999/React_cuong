import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [account, setAccount] = useState({
         username: '', 
         password: '' 
        });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAccount({ 
            ...account,
             [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent submit default event
        if (account.username === 'admin@gmail.com' && account.password === 'letmein') {
            navigate('/employee', { state: account });
        }
    }
    return (
        <div>
            <form>
                <div >
                    <label >Email address</label>
                    <input name="username" type="email"  placeholder="Enter email" onKeyUp={handleChange}></input>
                    <small id="emailHelp" ></small>
                </div>
                <div >
                    <label >Password</label>
                    <input name="password" type="password"  placeholder="Password" onKeyUp={handleChange}></input>
                </div>
                <button type="submit"  onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}
export default Login;