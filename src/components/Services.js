import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <>
      <div className="grid grid-cols-3 justify-center justify-items-center items-center w-full h-80 gap-0">
        <div className="bg-[#F1F5F9] rounded-lg w-72 h-64 ml-[650px] flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mb-5">
            <FaTruckMoving className="h-8 w-8 " />
          </div>

          <h3>Super Fast and Free Delivery</h3>
        </div>
        <div className="bg-[#F1F5F9] rounded-lg w-72 h-64 flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mb-5">
            <MdOutlineSecurity className="h-8 w-8 " />
          </div>
          <h3>Non-contact Shipping</h3>
        </div>

        <div className="bg-[#F1F5F9] rounded-lg w-72 h-64 mr-[650px] flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mb-5">
            <GiReceiveMoney className="h-8 w-8 " />
          </div>

          <h3>Money-back Guaranteed</h3>
        </div>
      </div>
    </>
  );
};

export default Services;
