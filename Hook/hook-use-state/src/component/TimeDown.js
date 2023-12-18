import React, { useState, useEffect } from "react";
const Timer = () => {
    const [timer, setTimer] = useState(10);
    useEffect(() =>{
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
        }, 1000);
        
        return () => {
            clearInterval(interval);
        }
        
    }, []);
    useEffect(() => {
        if (timer === 0) {
          alert('Timer has stopped');
          
        }
      }, [timer]);
    return (
        <div>
            <p>time: {timer}</p>
        </div>
    )
}
export default Timer;
