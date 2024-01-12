import React, { useState } from 'react';

const RegisterForm = () => {
    const [form, setForm] = useState({})
    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        });
    }
    function handleSubmit(event) {
        const isValid = form.username && form.email && form.password && form.confirmPassword 
         
            alert (isValid ? 'Sign in Success' : 'Sign in Failure');
        
    }
    return (
        <div>
            <h1>Sign In</h1>
            
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" onChange={handleChange} value={form.username || ''}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange} value={form.email}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} value={form.password}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={handleChange} value={form.confirmPassword}/>
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default RegisterForm;