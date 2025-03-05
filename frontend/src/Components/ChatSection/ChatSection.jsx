import React from "react";
import "./ChatSection.css";
import Mode from "../Mode/Mode";
import { LuSendHorizontal } from "react-icons/lu";
import { useContext } from "react";
import { dataCotext } from "../../context/UserContext";
import run from "../../gemini";
import userImg from "../../assets/user.png";
import aiImg from "../../assets/ai.png";

import { Atom } from "react-loading-indicators";

// const Component = () => <Atom />;

export default function ChatSection() {
  let { sent, input, setInput, showResult, setShowResult,resultData,recentPrompt,loading } =
    useContext(dataCotext);
  return (
    <>
      <div className="chatSection">
        <div className="topSection">
          {!showResult?<div className="heading">
            <span>Hello Surya,</span>
            <span>I'm Your Own Assistant</span>
            <span>How can I help you...?</span>
          </div>:<div className="result">
          <div className="userBox">
            <img src={userImg} alt="" width="60px"></img>
            <p>{recentPrompt}</p>
            </div>

            <div className="aiBox">
            <img src={aiImg} alt="" width="60px"></img>
            {loading?<Atom color="#377e37" size="medium" text="" textColor="" />:<p>{resultData}</p>}
            
            </div>
           
            </div>}
          
        </div>

        {/* bottomSection */}
        <div className="bottomSection">
          <div className="bottom">
            <input
              type="text"
              placeholder="enter your prompt.."
              id="inp"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            ></input>
            {input?<button
              id="sendBtn"
              onClick={() => {
                // run("Hello , How was your day today ?")
                sent(input);
                
              }}
            >
              {" "}
              <LuSendHorizontal />
            </button>:null}
            
            <Mode />
          </div>
        </div>
      </div>
    </>
  );
}
