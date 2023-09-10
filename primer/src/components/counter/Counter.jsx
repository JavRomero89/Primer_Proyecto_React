import { React,useState } from "react";
import "./Counter.css"


export default  function Counter(){

const [counter,setCounter] = useState(0);

const add = ()=> setCounter(prev=>prev +=1);

const subs = ()=> setCounter(prev=>prev -=1)




  return (
    <div id="divTotal">
    <button onClick={subs}>Subs</button>
    <span id="divCounter">{counter}</span>
    <button onClick={add}>Add</button>
    
    </div>
  );
}

