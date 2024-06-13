import React from "react";
import child from "../images/features/baby.png";
import "./ourServices.css";

function OurServices() {
  return (
    <div>
      <div className="mt-40 ">
        <div className="w-[80%] mx-[300px] mt-20   flex flex-wrap gap-10">
          {[...Array(6)].map((_, i) => (
            <div
              className="sm:w-sm md:w-[380px] bg-white h-[50vh]   shadow-xl "
              key={i}
            >
              <a href="#">
                <img className=" h-[300px] w-full" src={child} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Child care
                  </h5>
                </a>
                <p className="mb-3 font-normal  ">
                  Saepe nulla praesentium eaque omnis perferendis a doloremque.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="imag">
          <div className="mx-auto sec">
            <h1>WE ARE PLEASED TO OFFER YOU THE</h1>
            {/* <hr /> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
