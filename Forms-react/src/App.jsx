import DecryptedText from "./component/DecryptedText";
import GlitchText from "./component/GlitchText";

const App = () => {
  let submitHandler = (e) => {
    e.preventDefault();
    console.log("submit Handler has triggered");
  };
  let handleChange = (event) => {
    console.log(event.target);
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
          onChange={(event) => handleChange(event)}
        />
        <br />
        <button>Submit</button>
      </form>

      <DecryptedText
      
        text="HII RAGNAR"
        speed={80}
        maxIterations={10}
        characters="ABCD1234!?"
        className="revealed"
        parentClassName="all-letters text-6xl text-red-400 font-bold "
        encryptedClassName="encrypted"
        sequential="false"
      />
    </div>
  );
};

export default App;
