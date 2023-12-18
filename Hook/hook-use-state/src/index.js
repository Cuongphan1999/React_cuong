import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import Counter from './component/counter';
//import Selected from './component/Selector';
//import MyClock from './component/Clockdemo';
//import CarSelect from './component/Seletect-Car';
//import timeDown from './component/TimeDown';
//import App from './component/learn-hook';
//import NumberModification from './component/customHook/NumberModification';
import DictionaryTextBox from './component/customHook/dictionnaryTextbox';
import DictionaryButton from './component/customHook/dictionnaryButton';
import Timer from './component/TimeDown';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        
        {/* <Selected />
        <MyClock />
        <CarSelect />
        <timeDown />
        <NumberModification />
        <App /> */}
        <hr />
        <DictionaryTextBox />
        <DictionaryButton />
        <Timer/>
    </React.StrictMode>
);

