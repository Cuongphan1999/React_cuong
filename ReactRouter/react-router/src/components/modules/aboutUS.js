import React from "react"
import {Link} from "react-router-dom"
import routerWeb from "../routes/web";
 const AboutUS = () => {

    return (
       <div>
         <Link to={routerWeb.dictionary.contact}>to contactUS</Link> 
        <h1>about</h1>
       </div>
    )
}
export default AboutUS;