//bai 1:
// import React from "react";
// import ReactDom from "react-dom/client";
// const name = "Your name";
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
//   React.createElement("h1",{style: {color: "red"}}, name)
// )
//bai 2:nhung ten ban 
// import ReactDom from "react-dom/client";
// const name = "Your name";
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
//   <h1 style={{textAlign: "center" ,color: "red"}}> 
//     {name}
//   </h1>
// )
//bai 3: tao them DANH SACH
import ReactDOM from 'react-dom';

const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry']

ReactDOM.render(
<div>
    <h1>List of fruits</h1>
    <ul>
      { fruits.map((item) => (
        <li>{ item }</li>
      )) }
    </ul>
 </div>,
document.getElementById('root')
);