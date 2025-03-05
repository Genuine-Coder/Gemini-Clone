import React, { createContext, useState } from 'react'
import run from '../gemini';
export const dataCotext = createContext();


function UserContext({children}) {
    const [input,setInput] = useState(""); // it is used for taking input from the user 
    const [showResult,setShowResult] = useState(false); // it is used for changing landing page 
    // loading is used for showing loading animation 
    const [loading,setLoading] = useState(false);
    // resultData is used for showing result to the user
    const [resultData,setResultData] = useState("");
    // recentPrompt is used for show to user, what you searched 
    const [recentPrompt,setRecentPrompt] = useState("");  

    const [prevPrompt, setPrevPrompt] = useState([]);

    
   async function sent(prompt){ 
    setShowResult(true);
    setResultData("");
    setPrevPrompt(prev=>[...prev,prompt]);
    setRecentPrompt(prompt);
    setLoading(true);
    let response = await run(prompt);
     setResultData(response.split("*"));
     setLoading(false);
     setInput("");
    }
    const data = {
        sent ,
        input,
        setInput,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        recentPrompt,
        prevPrompt,
        


    }

  return (
    <>
    <dataCotext.Provider value={data}>
        {children}
    </dataCotext.Provider>
    </>
  )
}

export default UserContext