import React, { useContext } from "react";

const SeatItem = ({ soGhe, onSelect, selected }) => {
  return (
    <div className=" ">
      {/* <input type="checkbox" className="ghe "></input> */}
      <div className="flex">
        <input
          type="checkbox"
          id={soGhe}
          className="peer hidden"
          value={soGhe}
          checked={selected}
          onChange={onSelect}
        />
        <label
          htmlFor={soGhe}
          className=" ghe select-none cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "
        ></label>
      </div>
    </div>
  );
};

export default SeatItem;
