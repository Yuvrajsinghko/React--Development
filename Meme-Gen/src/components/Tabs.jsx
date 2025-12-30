import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "GIF"];

  const dispatch = useDispatch();
  const activTab = useSelector((state) => state.search.activTab);
  return (
    <div className="flex gap-5 p-10">
      {tabs.map((elem, idx) => {
        return (
          <button
            className={`${
              activTab == elem ? "bg-emerald-300 text-black" : "bg-amber-800 "
            } bg-amber-800 transition cursor-pointer active:scale-95 rounded-2xl uppercase px-4 py-2`}
            key={idx}
            onClick={() => {
              dispatch(setActivTabs(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
