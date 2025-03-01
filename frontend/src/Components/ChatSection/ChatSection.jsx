import React from "react";
import "./ChatSection.css";
import Mode from "../Mode/Mode";
import { LuSendHorizontal } from "react-icons/lu";

export default function ChatSection() {
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
        <button id="sendBtn"> <LuSendHorizontal/></button>
        <Mode/>
        </div>
        

      </div>
    </div>
  );
}
