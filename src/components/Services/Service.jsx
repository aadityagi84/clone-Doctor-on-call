import React from "react";
import doc1 from "../images/doc/doc1.jpg";
import doc2 from "../images/doc/doc4.jpg";
import doc5 from "../images/doc/doctor 5.jpg";

function Service() {
  return (
    <div>
      <div className="w-full mb-20 mt-40">
        <h1 className="text-center  font-bold underline text-[#2c4964]  text-[32px]">
          Services
        </h1>
        <p className="mb-20 text-center text-[#2c4964]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          voluptatibus optio quam ea earum,{" "}
        </p>
        <div className="flex  flex-wrap  gap-6  items-center mx-[250px]">
          <div className=" flex flex-col gap-3">
            <img src={doc1} className="w-[400px] rounded-md " alt="" />
            <img src={doc2} className="w-[400px] rounded-md " alt="" />
          </div>
          <div className=" flex flex-wrap gap-8 ">
            <div className="">
              <img src={doc5} className="w-[400px] rounded-md" alt="" />
            </div>
            <div className="">
              <h1 className="text-[#223a66] font-bold text-[44px]">
                Personal Care
                <br /> healthy living
              </h1>
              <p className="text-[#6C757D] mt-4">
                We provide best leading medicle service Nulla perferendis
                <br /> veniam deleniti ipsum officia dolores repellat laudantium
                <br /> obcaecati neque.
              </p>
              <button className="rounded-3xl font-regular py-2 text-white  bg-[#1977CC] hover:bg-white hover:text-[#1977CC] border border-[#1977CC]  duration-500 uppercase px-8 mt-16">
                Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
