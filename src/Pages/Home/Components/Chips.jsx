import React from "react";

const style={
  normal:"bg-section-divider",
  highlight:"bg-blue-light border-blue border-2"
}
export const Chips = ({ icon, name, setSelectedList,highlight }) => {
  const styles=style[highlight?"highlight":"normal"]
  return (
    <div className={`rounded-full pr-[8px] ${styles} mx-[4px] my-[4px] flex justify-center items-center bg-slate-200 w-fit`}>
      <div className="mr-[8px] bg-blue rounded-[50%] w-8 h-8 flex items-center justify-center">
        <img src={icon} alt="" className="w-7 h-7" />
      </div>
      <div className="mr-[8px]">{name}</div>
      <div
        className="w-4 h-4"
        onClick={() => {
          setSelectedList((list) => list.filter((item) => item.name !== name));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};
