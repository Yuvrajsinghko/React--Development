import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="h-screen w-full text-teal-500 text-7xl bg-gray-950">
      <SearchBar />
      <Tabs />
    </div>
  );
};

export default App;
