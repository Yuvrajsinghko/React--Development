import { useNavigate } from "react-router-dom";

const About = () => {
  const navi=useNavigate()
  


  return (
    <div className="h-screen">
      <button onClick={()=>{
        navi('/')
      }} className="bg-indigo-500 text-2xl text-amber-200 p-2 active:scale-95">Back to Main Content</button>
      <button onClick={()=>{
        navi(-1)
      }} className="bg-indigo-500 text-2xl text-amber-200 p-2 active:scale-95 ml-2">Back</button>
      
      <h1>About Page</h1>
    </div>
  );
};

export default About;
