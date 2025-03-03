import { useContext } from "react";
import ChatSection from "./Components/ChatSection/ChatSection";
import Seperation from "./Components/Seperation/Seperation";
import Sidebar from "./Components/Sidebar/Sidebar";
import UserContext, { dataCotext } from "./context/UserContext";

function App() {
  
let data = useContext(dataCotext);
console.log(data);
  return (
    <>
      <Sidebar/> 
      <Seperation/>
      <ChatSection/>
    </>
  )
}

export default App
