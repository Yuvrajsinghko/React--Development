import React from 'react'

const App = () => {
  let submitHandler=(e)=>{
    e.preventDefault()
    console.log("submit Handler has triggered");
    
  }
  let handleChange=(event)=>{
    console.log(event.target);
    

  }
  return (
<div>
  <form onSubmit={(e)=>{
    submitHandler(e)
  }} >
    <input type="text" placeholder='Enter you name' onChange={(event)=>handleChange(event)} />
    <br />
    <button>Submit</button>
  </form>
</div>  )
}

export default App