import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  const handleaccordian = (currtId) => {
    setselected(selected === currtId ? null : currtId);
  };

  const handleMultipleSelection = (currtId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currtId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(currtId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setmultiple(cpyMultiple);
  };
  console.log(selected, multiple);

  return (
    <div>
      <div className="main flex justify-center items-center flex-col bg-teal-600 h-screen">
        <button
          onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
          className="border p-2 text-3xl font font-semibold bg-black text-gray-600"
        >
          Enable Multi Select
        </button>
        <div className="accordian text-2xl w-[50vw]">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div key={dataItem.id} className="item p-3 bg-amber-300">
                <div
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleaccordian(dataItem.id)
                  }
                  className="title text-3xl  font-extrabold flex justify-between bg-orange-800"
                >
                  {dataItem.question} <span>+</span>
                </div>
                {enableMultipleSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="text-amber-200 bg-orange-800 text-center">
                        {dataItem.answer}
                      </div>
                    )
                  : selected === dataItem.id && (
                      <div className="text-amber-200 bg-orange-800 text-center">
                        {dataItem.answer}
                      </div>
                    )}
                {selected === dataItem.id ? (
                  <div className="text-amber-200 bg-orange-800 text-center">
                    {dataItem.answer}
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
