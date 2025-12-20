import React, { useState } from "react";

const App = () => {
  const [name, setname] = useState("");

  let submitHandler = (e) => {
    e.preventDefault();
    console.log(`submit Handler has triggered:${name}`);
    setname('')
  };
  
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter you name"
          value={name}
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
