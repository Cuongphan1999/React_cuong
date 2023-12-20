import React from 'react';
import { useParams } from 'react-router-dom';
const DictionaryDetail = () => {
    const params = useParams(); //bat dinh nghia , params chua gia tri key work
    console.log(params);
    return (
        <div>
            <p>ban nha url detail</p>
            <p>work: {params.word}</p>
            <p>definition: {params.definition}</p>
        </div>
    )
}
export default DictionaryDetail