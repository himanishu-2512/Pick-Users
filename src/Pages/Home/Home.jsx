import React, { useState, useRef, useEffect } from "react";
import { Chips, SuggestionBox } from "./Components";
import searchByName from "../../utility/searchByName";
import data from "../../data/data.json";
import { useClickAway } from "@uidotdev/usehooks";

const styles = {
  normal: { borderColor: "border-section-divider" },
  focused: { borderColor: "border-blue" },
};
export const Home = () => {

  const ref = useRef(null);  //reference for input tag
  const [text, setText] = useState(""); //for stroting the search value/input value
  const [selectedList, setSelectedList] = useState([data[0]]); //List of selected user , intially 1st users is selected
  const [suggestedList, setSuggestedList] = useState([]);//list of suggested users
  const [isOpen, setIsOpen] = useState(true);// state of open for suggestion box
  const [isFocus, setFocus] = useState(false);// state for input's focus

  const { borderColor } = styles[isFocus ? "focused" : "normal"];//styling on the basis of focus state
  /* a refernce to cta on focusing out/blurringt he suggestionbox */ 
  const dialogRef = useClickAway(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    setSuggestedList(searchByName(text, selectedList));
    ref.current.focus();
  }, [selectedList, text]);

  return (
    <div
      className={`flex border-b-2 ${borderColor} max-w-[600px] flex-wrap items-end pb-1`}
      onClick={() => {
        ref.current.focus();
      }}
    >
      {selectedList.length > 0 &&
        selectedList.map((item,index) => {
          return (
            <Chips
              icon={item.avatar}
              name={item.name}
              setSelectedList={setSelectedList}
              highlight={(index===(selectedList.length-1))&&text===" "}//highlight the last user if text value is " ".
            />
          );
        })}

      <div className="relative mb-">
        <input
          type="text"
          ref={ref}
          className="border-0 grow w-[200px] max-w-[600px] mb-[8px] h-[100%] p-0 focus:outline-none"
          onFocus={() => {
            setFocus(true);
            setIsOpen(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          onChange={(e) => setText(e.target.value)}
          placeholder={"Search the person's name"}
        />
        {(isOpen || isFocus) && (
          <div className="absolute top-[30px]" ref={dialogRef}>
            <SuggestionBox
              list={suggestedList}
              setSelectedList={setSelectedList}
            />
          </div>
        )}
      </div>
    </div>
  );
};
