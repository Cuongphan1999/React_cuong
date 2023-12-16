import React from 'react';
import useDictionary from './hook-more/useDictionary';
const DictionaryButton = () => {
    const {req, HandleLookup} = useDictionary()
    
    return (
      
        <div>
         {/* <p>{JSON.stringify(req.data)}</p> */}
           <p>work: {req.isLoading ? "loading" : req.data.map(item => (
            <span key={item.word}>{item.word}</span>
           ))}</p>
           
            <button onClick={() => HandleLookup('hello')}>hello</button>
          </div>
        )
}
export default DictionaryButton;
