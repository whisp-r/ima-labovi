import React, { setState, useState } from "react";

const useDropdown = (dataset) => {
  const [data, setData] = useState();

  const Dropdown = () => {
    return (
      <div>
        <select onChange={(e) => setData(e.target.value)}>
          <option> all</option>
          {dataset.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return [data, setData, Dropdown];
};

export default useDropdown;
