// import { useState, useEffect } from "react";

// function Selector() {
//   let [selected, setSelected] = useState("0");
//   let [valueSelected, setValueSelected] = useState("");

//   const choice = e => {
//     setSelected(e.target.value);
//   };

//   useEffect(() => {
//     switch (selected) {
//       case "0":
//         setValueSelected("Java");
//         break;
//       case "1":
//         setValueSelected("Angular");
//         break;
//       case "2":
//         setValueSelected("Javascript");
//         break;
//       case "3":
//         setValueSelected("Php");
//         break;
//       default:
//     }
//   }, [selected]);

//   return (
//     <div>
//       Khoá học :
//       <select
//         onChange={e => {
//           choice(e);
//         }}
//       >
//         <option value="0">Java</option>
//         <option value="1">Angular</option>
//         <option value="2">Javascript</option>
//         <option value="3">Php</option>
//       </select>
//       <h2>Your selected: {valueSelected}</h2>
//     </div>
//   );
// }
// export default Selector;
//CACH2:
import { useState, useEffect } from "react";
export default function Selected() {
    const [selected, setSelected] = useState('0');
    const [valueSelected, setValueSelected] = useState('')
    let programmingLanguage = ['Java', 'Angular', 'Javascript', 'Php'];
    const choice = (e) => {
        setSelected(e.target.value);
       
    }

    useEffect(() => {
        setValueSelected(programmingLanguage[selected]); //cập nhật biến trạng thái "valueSelected"
        
    }, [selected]);//Mảng phụ thuộc, [selected, là đối số thứ hai được truyền cho useEffect
    return (
        <div>
            Khoa hoc:
            <select onChange={e => { choice(e) }}>  
                {
                    programmingLanguage.map((language, index) => (
                        <option value={index} >{language}</option>
                    ))
                
                   
                }

            </select>
            <h2>you selector: {valueSelected}</h2>
            
        </div>
    )
}
//tham số là sự kiện (`e`) để xử lý sự kiện