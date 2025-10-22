import React from "react";
import "remixicon/fonts/remixicon.css";
const LeftContant = () => {
  return (
    <>
      <div className="h-full w-1/3 flex flex-col justify-between ">
        <div className="p-6">
          <h3 className=" leading-tight text-7xl font-bold mb-7">
            Prospective <br /> <span className="text-gray-200">Customer</span> <br /> Segmentation
          </h3>
          <p className="text-xl font-medium text-gray-400 mb-5 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            culpa enim asperiores voluptatum sapiente exercitationem doloremque
            aliquid eligendi tempora impedit.
          </p>
        </div>
        <div>
          <i className=" text-8xl ri-arrow-right-up-line"></i>
        </div>
      </div>
    </>
  );
};

export default LeftContant;
