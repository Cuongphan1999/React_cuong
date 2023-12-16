import {useState} from 'react';
export default function Counter() {
    let [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
        
    }
    //C2
    // const increasenew = () => {
    //     setCount(count + 1);
    // }
    return (
        <div class='container'>
            <p>Count: {count}</p>
            
            <button onClick={increase}>Count</button>
            {console.log(count)}
        </div>
    )
    
}
