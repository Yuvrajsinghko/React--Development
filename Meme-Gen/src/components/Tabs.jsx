import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex gap-5 p-10">
      {tabs.map((elem, idx) => {
        return (
          <button
            className={`${
              activeTab == elem ? "bg-emerald-300 text-black" : "bg-amber-800 "
            } bg-amber-800 transition cursor-pointer active:scale-95 rounded-2xl uppercase px-4 py-2`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
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
