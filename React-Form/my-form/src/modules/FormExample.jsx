import { Formik} from 'formik';
import {React} from 'react';
//import { json } from 'react-router-dom';
const FormExample = () => {
        const onFormSubmit = (values) => {
            console.log(values);
        }
        const validate = (values) => {
            const errors = {};
            if(values.email === '') {
                errors.email = 'email khong de trong'
            }
            if (values.password === '') {
                errors.password = 'password khong de trong'
            }
            return errors;
        }
        
    
    return (
        <div>
            <h1>Form example</h1> 
            {/* {JSON.stringify(values)} */}
           <Formik initialValues={{email: '', password: ''}} onSubmit={onFormSubmit} validate={validate} validateOnBlur={false} validateOnChange={false}> 
           {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => {

                return(
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email</label>
                            <input type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            <span>{errors.email && touched.email ? errors.email : ""}</span>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='password' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
                            <span>{errors.password && touched.password ? errors.password : ""}</span>
                        </div>
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                )}}
           
           </Formik>
            
        </div>
    )
}
export default FormExample