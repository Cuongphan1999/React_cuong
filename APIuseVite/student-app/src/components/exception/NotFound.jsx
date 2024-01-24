import {FaFastBackward, FaQuestionCircle } from "react-icons/fa";
export default function NotFound() {
    return (
        <>
        <div className="d-flex flex-column align-items-center justify-content-center">
            <FaQuestionCircle size={50} className="text-warning"/>
            <h1>Page Not Found</h1>
            <p>Oopa! we couldn't find the page that you're looking for.</p>
            <p>Please check the address and try again</p>
        </div>
        </>
    )
}