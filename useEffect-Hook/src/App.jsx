import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect(()=>{
    console.log("use effect running....");
    
  },[])


  return <div>
    <h1>num is :{num}</h1>
    <h2>num2:{num2}</h2>
    <button onClick={()=>{
      setnum(num+1)
      setnum2(num2+10)
    }}>Increment</button>
  </div>;
};

export default App;
