import axios from "axios";
import { useState } from "react";

const App = () => {
  const [imageArr, setImageArr] = useState([]);
  const getData = async () => {
    // const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // const data = await response.json();
    // console.log(data);

    const { data } = await axios("https://picsum.photos/v2/list");
    setImageArr(data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {imageArr.map((elem, idx) => (
         <div key={idx}>
          <img src={elem.download_url}alt="hehe" />
         </div>
        ))}
      </div>
    </div>
  );
};

export default App;
