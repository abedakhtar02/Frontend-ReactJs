import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count,setCount] = useState(0);
  const Add = () =>{
    console.log("Clicked")

    setCount(count => count+1);
  }
  
  const Reduce = () =>{
    console.log("Clicked")
    if(count>0)
      setCount(count-1);
    else if(count==0)
      alert('You reached the start!')
  }

  return (
    <>
      <h1>Counter Page</h1>
      <p>Counter is : {count} </p>

      <button onClick={Add}>Add</button>
      <button onClick= {Reduce}>Reduce</button>
    </>
  );
}

export default App;
