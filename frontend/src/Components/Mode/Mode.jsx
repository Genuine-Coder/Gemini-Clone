import React, { useEffect, useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import './Mode.css';


export default function Mode() {

const [mode,setMode] = useState(false);

    useEffect(()=>{
        // console.log(document.body.className,mode );
        if(mode){
            document.body.className = "lightMode";
        }else{
            document.body.className = "darkMode";
        }
    },[mode])

  return (
   <div className="mode">
    <button className='darkmode-btn'
    onClick={()=>{
        setMode(prev=> !prev)
    }}
    ><IoSunnyOutline /></button>
   </div>
  )
}
