import { useState } from "react";

const App = () => {
  const [Name, setName] = useState("");
  const changeName = (e) => {
    let val=e.target.value
    setName(val)
    
  };
  return (
    <div>
      <h1>Hii {Name}</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        value={Name}
        onChange={changeName}
      />
    </div>
  );
};

export default App;
