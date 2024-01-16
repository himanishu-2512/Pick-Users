import React from "react";

const User = ({ name, avatar,setSelectedList,item }) => {
  
  return (
    <>
      <div className="flex items-center px-[16px] py-[6px] bg-white hover:bg-section-divider w-[100%]"  onClick={()=>setSelectedList((list)=>[...list,item])} >
        <div className="mr-[8px] bg-blue rounded-[50%] w-8 h-8 flex items-center justify-center">
          <img src={avatar} alt="" className="w-7 h-7" />
        </div>
        <div className="mr-[8px]">{name}</div>
      </div>
    </>
  );
};

export const SuggestionBox = ({ list,setSelectedList }) => {
  return (
    <>
      {list.length > 0 && (
        <div className="max-h-[200px]  scroll-smooth no-scrollbar overflow-scroll flex flex-col  shadow-[0px_1px_2px_0_rgba(0,0,0,0.1)]  border-placeholder border-[1px]  w-[300px] ">
          {list.length > 0 &&
            list.map((item) => {
              return <User name={item.name} avatar={item.avatar} setSelectedList={setSelectedList} item={item} />;
            })}
        </div>
      )}
    </>
  );
};
