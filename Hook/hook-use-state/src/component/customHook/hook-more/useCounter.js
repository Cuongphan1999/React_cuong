import React from "react"
//note: luon luon bat dau bang use__
 const useCounter = (initialValue) => { //initialvalue  gia tri ban dau(bien)
    const [counter, setCounter] = React.useState(initialValue);
    const modifyBy = (number) => {
        setCounter(counter + number);
    }
    return [counter, modifyBy]
 } 
 export default useCounter;