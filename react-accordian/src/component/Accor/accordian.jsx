import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setselected] = useState(null);

  const handleaccordian = (currtId) => {
    setselected(selected === currtId ?null:currtId);
  };

  return (
    <div>
      <div className="main">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div key={dataItem.id} className="item">
                <div
                  onClick={() => handleaccordian(dataItem.id)}
                  className="title"
                >
                  {dataItem.question} <span>+</span>
                </div>
                {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}
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
