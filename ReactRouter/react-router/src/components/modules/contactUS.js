import React from "react"
import { Link } from "react-router-dom"
import routerWeb from "../routes/web";
 const ContactUS = () => {

    return (
       <div>
         <Link to = {routerWeb.dictionary.about} >to about</Link>
         <h1>contactUS</h1>
       </div>
     )
}
export default ContactUS;