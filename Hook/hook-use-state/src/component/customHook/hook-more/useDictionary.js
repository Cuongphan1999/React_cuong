import React from "react";
const useDictionary = () => {
    const [req, setReq] = React.useState({
        isLoading: false,
        data: [],
        error: "" // false, 0, -0, on, "", null, undefined,nan :deu dieu kien false
    });
    const HandleLookup =  async (word) => {
        try {
            setReq({
                ...req,
                isLoading: true
            })
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const jsonData = await res.json();
            //check error->tra ve title trong network
            if (Array.isArray(jsonData)) {
                setReq({
                    ...req,
                    isLoading: false,
                    data: jsonData
                })
            }else{
                setReq({
                    ...req,
                    isLoading: false,
                    error: "Error"
                })
                
            }
            
        }catch (e) {
            console.log("error");
        }
    }
    return{req, HandleLookup} //req try cap data and tim kiem tu khoa
}
export default useDictionary;