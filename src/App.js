import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

   const [count,setCount]=useState(1);


   useEffect(()=>{
     if(count>1000)
     {
       setCount(1000);
     }
   },[count]);

   const handleIncrement=()=>{
    if(count<1000)
    setCount(prevCount=>prevCount+1);
   }

   const handleDecrement=()=>{
     
     setCount(prevCount=>prevCount-1);
   }

  return (
    <div className="App">
      <div className="div-style">
      <button className="decrement-button" onClick={handleDecrement}> <strong>-</strong> </button>
      </div>
      <div className="div-style">
      <input className="counter" value={count} onChange={(e)=>e.target.value.length ? setCount(parseInt(e.target.value)):setCount(e.target.value)}></input>
      </div>
      <div className="div-style">
      <button className="increment-button" onClick={handleIncrement}> <strong>+</strong> </button>
      </div>

      
    </div>
  );
}

export default App;
