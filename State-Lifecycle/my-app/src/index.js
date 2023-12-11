import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
//import App from "./App";

import './bootstrap-5.2.3-dist/css/bootstrap.min.css'
//import Button from './components/Button';
//import Demo from './components/delete-component';
//import Calculator from './components/Calculator';
//import ContentMain from './components/ExpandCollapse';
//import Home from './components/Home-loginout';
//import Todo from './components/ToDo';
import bootstrapLogin from './components/Loginout-Bootstrap';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    //Button/>,
    //<Demo/>,
   //<Calculator/>
   //<Home/>
    //<ContentMain/>
    <bootstrapLogin/>
//<Todo/>


   
  
)

