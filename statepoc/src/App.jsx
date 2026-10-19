import React from "react";
import {useState} from "react"

function App(){
  const [count,setCount] = useState("sunil");
  const incrementCount = ()=>{
    setCount("Dinesh");
  }
  return <>
    <h1>{count}</h1>
    <button onClick={incrementCount}>Incr</button>
  </>
}
export default App;