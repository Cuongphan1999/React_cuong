import React, {useState} from 'react';

function Todo (){
    const [value, setValue] = useState('ff');
    const [check, setCheckdos] = useState([]);
    function changeInput (e){
        //setValue(e.target.value);
        console.log(e.target)
    }
    const addTodos = () => {
        const todoCopied = [...check];
        todoCopied.push(value);
        setCheckdos(todoCopied);
        //clear input
        setValue('');

    }
    return (
       <>
         <h1>TO DO</h1>
        <input type="text" id="input" onchange={e => changeInput(e)} value={value}/>
        <button onClick={addTodos}>ADD</button>
        <ul>
            {check.map(todo =>(
                <li>{todo}</li>
            ))}
        </ul>
        </>
    );
}
export default Todo;
