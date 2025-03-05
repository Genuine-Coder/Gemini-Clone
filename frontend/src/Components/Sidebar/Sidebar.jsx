import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { dataCotext } from '../../context/UserContext';
import { useContext } from "react";
import './Sidebar.css'


export default function Sidebar() {
  let { prevPrompt,sent ,setShowResult} = useContext(dataCotext);

  
    const [extend,setExtend] = useState(false);
  return (
    <div className='sidebar'>
        <GiHamburgerMenu id='ham' onClick={()=>{
            setExtend(prev=>!prev);
        }}/>
        <div className="newChat">
            <FaPlus onClick={()=>{ setShowResult(false)}}/>
           {extend?<p onClick={()=>{ setShowResult(false)}}>New Chat</p>:null} 
        </div>
        {
          prevPrompt.map((item,index)=>{
            return(
              <div className="recent">
              <FaRegMessage />
              {extend?<p onClick={async()=>{
                await sent(item);
              }}>{item.slice(0,11)+"..."}</p>:null}
              </div>
            )
            
          })
        }
      
    </div>
  )
}
