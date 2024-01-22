import { FaQuestionCircle, FaFastBackward } from "react-icons/fa";

export default function NotFoundPage() {
    return (
        <div className="vh-100 w-100 d-flex flex-column align-items-center justify-content-center">
   
            <button  className="btn btn-outline-warning d-flex align-items-center">
                <FaFastBackward className="me-2" />
                Back to previous page
            </button>
        </div>
    )
}