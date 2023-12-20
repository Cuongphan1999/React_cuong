import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { buildUrl, config } from '../../config';
import userService from '../../services/userServices';
const Authentication = () => {

    const navigate = useNavigate()
  
    const [form, setForm] = useState({
      email: '',
      password: ''
    })
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value //email: 'user_input', password: 'user_input'
      })
    }
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (form.email === 'admin@gmail.com' && form.password === 'letmein') {
        userService.storeUser({ email: form.email })
        navigate(buildUrl(config.routes.web.dashboard), { replace: true })
      }
    }
  
    return (
      <form onSubmit={(e) => handleLogin(e)} method="POST">
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={(e) => handleChange(e)} />
        </div>
  
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={(e) => handleChange(e)} />
        </div>
  
        <button onClick={handleLogin}>Login</button>
      </form>
    )
  }
  
  export default Authentication