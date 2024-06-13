import React from "react";
import "./About.css";
import img from "../images/doc/doctor 5.jpg";
import img2 from "../images/logo.png";
import img3 from "../images/doc/doc4.jpg";

function About() {
  const Aboutimg = "../";
  return (
    <>
      <div className="about mb-20 " id="overlay"></div>
      <div className="flex  mx-auto w-[60%] gap-10 mb-20 py-20 ">
        <div className="  text-center ">
          <h1 className="text-[#2c4964] text-[32px] font-bold">
            OUR DOCTORS
            <br /> ACHEIVEMENT
          </h1>
          <hr />
          <h1 className="text-[#6c757d] ">Lorem ipsum dolor sit amet.</h1>
          <p className="mt-2 text-justify pl-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />
            elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit!
            Saepe ullam facere at, consequatur incidunt,
            <br /> quae esse, quis ut reprehenderit dignissimos, libero <br />
            delectus.
          </p>
        </div>
        <div className="">
          <img src={img} className="w-[800px] rounded-md " alt="" />
        </div>
      </div>
      <div className="text-center mb-20 ">
        <i className="fa-solid text-[#6c757d] fa-envelope-open-text shadow-xl text-6xl"></i>
        <p>no data</p>
      </div>
      <div className="mx-auto flex mb-20 flex-wrap sm:flex-col md:flex-row gap-28 justify-center items-center  ">
        <div className="w-[15%]  ">
          <h1 className="text-[#2c4964] text-[32px] pb-[20px] font-bold text-center  ">
            OUR DOCTORS
            <br />
            ACHEIVEMENT
          </h1>
          <hr />
          <p className="text-[.875em] text-[#6c757d] text-center ">
            Lorem ipsum dolor sit amet.
          </p>{" "}
        </div>
        <div className="w-[50%] flex flex-wrap gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-[#eff0f3] w-[300px]  h-[120px] rounded-xl"
            >
              <img src={img2} className="w-[100%] mx-auto mt-4" alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className=" w-[80%] mx-auto flex  mb-20 gap-10 flex-wrap ">
        <div className=" w-[40%]">
          <img src={img3} alt="" />
        </div>
        <div className="w-[50%]">
          <h1 className=" text-center text-[#2c4964] text-[32px] font-bold">
            WHAT DOCTOR'S SAY
          </h1>
          <hr />
          <p className=" text-center text-[#6c757d] text-[.875em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsum!
          </p>
          <h2 className="text-[#223A66] font-semibold">Amazing service!</h2>
          <p className="text-[#223A66]">John Partho</p>
          <p className="text-[#6c757d] text-[.875em]">
            They provide great service facilty consectetur adipisicing elit.
            Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
            adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet
            nostrum nemo commodi numquam quod.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
