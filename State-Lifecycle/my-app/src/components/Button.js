
// import { Component } from "react";

// class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0
//     };
//   }

//   increase = () => {
//     this.setState({ number: this.state.number + 1 });
//   };
//   decrease = () => {
//     this.setState({ number: this.state.number - 1 });
//   };

//   render() {
//     return (
//       <div style={{ textAlign: "center", padding: 30 }}>
//         <button onClick={this.decrease}>Decrease</button>
//         <span style={{ padding: 10 }}>{this.state.number}</span>
//         <button onClick={this.increase}>Increase</button>
//       </div>
//     );
//   }
// }
//C2
// import { Component } from "react";

// export default class IncreaseButton extends Component {
//     constructor() {
//         super();
//         this.state =  //Cập nhật object this.state lần lượt theo các key-value
//         { value: 0 }
//     }
//     render() {
//         return (
//             <div className='container'>
//                 <h3>{this.state.value}</h3>
//                 {/* Khởi tạo biến increase có giá trị trả về là hàm this.setState */}
//                 <button onClick={(e) => { this.setState({ value: this.state.value + 1 }) }}>Increase (+)</button>
//                 <button onClick={(e) => { this.setState({ value: this.state.value - 1 }) }}>Decrease (-)</button>
//             </div>
//         )
//     }
// }

//C3
//hook `useState` để tạo một biến `number` và một hàm `setNumber` 
//để cập nhật giá trị của biến `number`. Ban đầu, giá trị 
//của biến `number` được đặt là 0.
import React, { useState } from 'react';
function Button() {
    const [number, setNumber] = useState(0); //set number de cap nhat gia tri ban cua bien
    const increaseNumber = () => {
        setNumber(number + 1);
    };
    const decreaseNumber = () => {
        setNumber(number - 1);
    };
    return (
        <div class='container'>
            <div><span>{number}</span></div>
        <button onClick={increaseNumber}>increase</button>
        <button onClick={decreaseNumber}>decrease</button>
        </div>
    );
}
export default Button;