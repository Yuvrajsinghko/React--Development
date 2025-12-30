import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, settext] = useState("");

  const dispatch = useDispatch();

  const subitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    settext("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => subitHandler(e)}
        className="flex p-10 gap-12 bg-indigo-900 sm:flex-col lg:flex-row"
      >
        <input
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          required
          className="border-2 w-full border-amber-500 outline-none py-2 px-2 rounded-3xl"
          type="text"
          placeholder="Search anything.."
        />
        <button className=" active:scale-95 border-2 border-amber-500 outline-none py-2 px-4 cursor-pointer rounded-3xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
