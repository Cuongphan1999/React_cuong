// import { useState } from "react";
 
// export default function useClock() {
//     const [time, setTime] = useState("");
//     const [ampm, setampm] = useState("");
 
//     // Function cập nhật thời gian.
//     const updateTime = function () {
//         let dateInfo = new Date();
//         let hour = 0;
//         /* Lấy giá trị của giờ */
//         if (dateInfo.getHours() === 0) {
//             hour = 12;
//         } else if (dateInfo.getHours() > 12) {
//             hour = dateInfo.getHours() - 12;
//         } else { //giờ nằm trong khoảng từ 1 đến 12 (bao gồm) ở định dạng 12 giờ hoặc từ 0 đến 23 (bao gồm) ở định dạng 24 giờ
//             hour = dateInfo.getHours();
//         }
//         /* Lấy giá trị của phút */
//         //Dòng này cũng kiểm tra xem giá trị phút có nhỏ hơn 10 hay không. 
//         //Nếu đúng như vậy, nó sẽ thêm số 0 đứng đầu giá trị phút
//         let minutes =
//             dateInfo.getMinutes() < 10
//                 ? parseInt("0" + dateInfo.getMinutes())
//                 : dateInfo.getMinutes();
 
//         /* Lấy gía trị của giây */
//         let seconds =
//             dateInfo.getSeconds() < 10
//                 ? "0" + dateInfo.getSeconds()
//                 : dateInfo.getSeconds();
 
//         /* Định dạng ngày */
//         let ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";
 
//         /* Cập nhật state */
//         setampm(ampm)
//         setTime(`${hour}:${minutes}:${seconds}`);
//     };
 
//     setInterval(function () {
//         updateTime();
//     }, 1000);
 
//     return [time, ampm]
// }
import { useState } from "react";
export default function useClock() {
    const [time, setTime] = useState("");
    const [ampm, setampm] = useState("");
    function updateTime() {
        let dataInfo = new Date();
        let hour = dataInfo.getHours();
        let minutes = dataInfo.getMinutes();
        let seconds = dataInfo.getSeconds();
        let ampm = dataInfo.getHours() >= 12 ? "PM" : "AM";
        setTime(`${hour}: ${minutes}: ${seconds}`);
        setampm(ampm);
    }
    setInterval(function () {
        updateTime();
    }, 1000);
    return [time, ampm];
}