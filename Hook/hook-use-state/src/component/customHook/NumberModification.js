import React from 'react';
import useCounter from './hook-more/useCounter';
//todo: Number current: 1
//todo: tao 2 nut tang, giam

const NumberModification = () => {
    const [counter, modifyBy]  = useCounter(1);
    //const [counter, setCounter] = React.useState(1);
    // const IncreasebyOne = () => {
    //     setCounter(counter + 1);
    // }
    // const DecreasebyOne = () => {
    //     setCount(count - 1);
    // }
    // const IncreasebyThree = () => {
    //     setCount(count + 3);
    // }
    // const DecreasebyThree = () => {
    //     setCount(count - 3);
    // }


    return (
        <div>
        <p>Number current: {counter} </p>
        <button onClick={() => modifyBy(1)}>increase by 1</button>
        <button onClick={() => modifyBy(3)}>increase by 3</button>
        <button onClick={() => modifyBy(-1)}>decrease by -1</button>
        <button onClick={() => modifyBy(-3)}>decrease by -3</button>
        {/* <button onClick={IncreasebyOne}>increase by 1</button>
        <button onClick={DecreasebyOne}>decrease by 1</button>
        <button onClick={IncreasebyThree}>increase by 3</button>
        <button onClick={DecreasebyThree}>increase by 3</button> */}
        </div>
    )
        
    
}
export default NumberModification;