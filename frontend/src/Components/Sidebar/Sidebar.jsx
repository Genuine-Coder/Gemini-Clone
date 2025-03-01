import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

import './Sidebar.css'

export default function Sidebar() {
    const [extend,setExtend] = useState(false);
  return (
    <div className='sidebar'>
        <GiHamburgerMenu id='ham' onClick={()=>{
            setExtend(prev=>!prev);
        }}/>
        <div className="newChat">
            <FaPlus />
           {extend?<p>New Chat</p>:null} 
        </div>
        <div className="recent">
        <FaRegMessage />
        {extend?<p>Who Are You</p>:null}
        </div>
    </div>
  )
}
