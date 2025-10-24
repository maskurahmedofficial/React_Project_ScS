import React from "react";

const RightCard = () => {
  return (
    <>
      <div className="h-full w-80 bg-red-400 overflow-hidden relative rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=759"
          alt="img"
          className="h-full w-fit object-cover "
        />
        <div className="absolute flex justify-between p-4 flex-col top-0 left-0  h-full w-full ">
          <h2 className="bg-white h-[50px] w-[50px] rounded-[50%] flex justify-center items-center font-bold text-2xl">1</h2>
          <div className="mt-56">
            <p className="text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              distinctio officiis consectetur a earum tempora.
            </p>
          </div>
          <div className="flex gap-2 mb-3 pl-4">
            <button className="px-6 py-4 bg-blue-500 rounded align-middle text-white">Setisfied</button>
            <button className="px-6 py-4 bg-blue-500 rounded align-middle text-white"><i className=" text-white ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightCard;
