import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import './components/bootstrap-5.2.3-dist/css/bootstrap.min.css';
//import App from './App';
// import Alert from './components/Alert';
// import AddClass from './components/AddClass';
// import WelcomeFunc from './components/WelcomeFunc';
import StudentInfor from './components/StudentInfor';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
//<Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>,
//<WelcomeFunc name="hello world!" />,
//<AddClass firstNumber={1} secondNumber={2} />
<StudentInfor/>
)