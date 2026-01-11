import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  // const getData = async () => {
  //   const res = await axios.get(
  //     `https://picsum.photos/v2/list?page=${index}&limit=15`
  //   );
  //   setUserData(res.data);
  // };

  useEffect(function () {
    const getData = async () => {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUserData(res.data);
    };
    getData()
  }, [index]);
  let printUserData =<h1 className="text-5xl font-extrabold text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading.....</h1> ;

  if (userData.length > 0) {
    printUserData = userData.map((item, idx) => {
      return (
        <div key={idx}>
          <div>
            <img
              className="h-[15vw] w-[15vw] rounded-4xl object-cover"
              src={item.download_url}
              alt=""
            />
            <h3 className="text-2xl font-extrabold mt-5 text-teal-500 bg-amber-800 rounded-4xl text-center p-2">
              {item.author}
            </h3>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-[120vh] p-4 ">
      <h1 className="fixed text-7xl text-amber-500">{index}</h1>
      <div className="flex h-[80%] flex-wrap gap-5 p-30 text-teal-400 mb-12">
        {printUserData}
      </div>

      <div className="flex justify-center text-5xl gap-20 items-center">
        <button
        style={{opacity:index ===1?0.5:1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([])
            }
          }}
          className="border-2 rounded-3xl p-2 text-amber-200 bg-neutral-700 cursor-pointer active:scale-95"
        >
          Prev
        </button>
        <h4 className="text-2xl font-extrabold text-amber-600">Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([])
          }}
          className="border-2 rounded-3xl p-2 text-amber-200 bg-neutral-700 cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
