import React from "react";

const RighttCardContent = (props) => {
  return (
    <div className="absolute flex justify-between p-4 flex-col top-0 left-0  h-full w-80 ">
      <h2 className="bg-white h-[50px] w-[50px] rounded-[50%] flex justify-center items-center font-bold text-2xl">
        1
      </h2>
      <div className="mt-56">
        <p className="text-white font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          distinctio officiis consectetur a earum tempora.
        </p>
      </div>

      <div className="flex gap-1 mb-3 pl-4">
        <button className="px-6 py-4 bg-blue-500 rounded-full align-middle text-white">
          
        </button>
        <button className="px-6 py-4 bg-blue-500 rounded-full align-middle text-white">
          <i className="  text-white font-bold ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default RighttCardContent;
