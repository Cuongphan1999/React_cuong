import React from "react";
import useDictionary from "./hook-more/useDictionary";
const DictionaryTextBox = () => {
    const [word, setWord] = React.useState('')
    const {req, HandleLookup} = useDictionary();
    return (
        // {req.error ? <ErrorOnFetching/>:
        <div>
         {/* <p>{JSON.stringify(req.data)}</p> */}
         
           <p>work: {req.isLoading ? 'loading' : !req.error && req.data.map(item => (
            <span key={item.word}>{item.word}</span>
           ))}</p>
            <input onChange={(e) => setWord(e.target.value)}/>
                <button onClick={() => HandleLookup(word)}>lookup</button>
        </div>
     //}
    )
}
export default DictionaryTextBox;