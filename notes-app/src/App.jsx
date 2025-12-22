import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const cpyTask = [...task];

    cpyTask.push({title,details})
    setTask(cpyTask)
    
    

    setTitle("");
    setDetails("");
  };

  
  
  return (
    <div className="min-h-screen flex gap-54 p-19 bg-black">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex p-10 h-full w-[50%] text-teal-200 text-3xl gap-10 flex-col  justify-start  "
      >
        <h1 className="text-5xl text-amber-600 font-extrabold">Add Notes</h1>
        {/* First Input */}
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          className="p-5 border-2  h-25  font-medium rounded-3xl"
          type="text"
          placeholder="Enter Notes Heading"
        />
        {/* Second Input */}
        <textarea
          value={details}
          onChange={(event) => {
            setDetails(event.target.value);
          }}
          className="p-5 border-2  font-medium h-[12vw] rounded-3xl"
          placeholder="Enter Detailes"
        ></textarea>
        <button className="bg-amber-400 active:bg-amber-700 rounded-3xl text-3xl text-teal-800 font-extrabold p-4 w-fit">
          Add Notes
        </button>
      </form>
      <div className="flex flex-col gap-10 border-l-2 border-amber-600 px-10">
        <h1 className="text-teal-600 font-extrabold text-4xl">Your Notes</h1>
        <div className="flex gap-5 flex-wrap">
          {task.map((elem,idx)=><div key={idx} className="h-65 w-59 rounded-3xl p-2 bg-cyan-800">
            <h2 className="text-center text-4xl font-bold border-b-2 border-b-cyan-300 text-amber-500 mb-7">{elem.title}</h2>
            <p className="text-2xl font-medium">{elem.details}</p>
          </div>)}
          
        </div>
      </div>
    </div>
  );
};

export default App;
