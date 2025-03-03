import React from "react";
import "./ChatSection.css";
import Mode from "../Mode/Mode";
import { LuSendHorizontal } from "react-icons/lu";
import { useContext } from "react";
import { dataCotext } from "../../context/UserContext";
import run from "../../gemini";



export default function ChatSection() {

  let {sent} = useContext(dataCotext);
  return (
    <div className="chatSection">
      <div className="topSection">
        <div className="heading">
          <span>Hello Surya,</span>
          <span>I'm Your Own Assistant</span>
          <span>How can I help you...?</span>
        </div>
      </div>
      <div className="bottomSection">
        <div className="bottom">
        <input type="text" placeholder="enter your prompt.." id="inp"></input>
        <button id="sendBtn" onClick={()=>{
          // run("Hello , How was your day today ?")
          sent();
        }}> <LuSendHorizontal/></button>
        <Mode/>
        </div>
        

      </div>
    </div>
  );
}
