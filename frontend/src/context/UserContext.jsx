import React, { createContext } from 'react'
import run from '../gemini';
export const dataCotext = createContext();


function UserContext({children}) {

    
   async function sent(){
      await run("hello");
    }
    const data = {
        sent 
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