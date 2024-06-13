import React from "react";

function InfoPage() {
  return (
    <div className="flex   flex-wrap  sm:mx-20 gap-6 md:mx-[300px] mb-10  ">
      <div>
        <a
          href="#"
          className="block max-w-[400px] p-10 bg-[#1977CC]  shadow rounded   "
        >
          <h3 className="mb-4  text-4xl  font-bold tracking-tight text-white-900 dark:text-white">
            Why Choose Us?
          </h3>
          <p className=" text-[16px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur
            quia eos. Autem tempore quibusdam vel necessitatibus optio ad
            corporis..
          </p>
          <button className="text-white bg-[#FFFFFF33] rounded-3xl px-6 py-2 mx-[90px] my-5 duration-700 hover:bg-white hover:text-[#1977CC] ">
            Learn More{" "}
          </button>
        </a>
      </div>

      <div className="md:max-w-[270px] sm:max-w-md p-6 bg-white rounded-md   shadow-xl  ">
        <i className="fa-solid fa-house-user mx-[100px] text-3xl text-[#1977cc] "></i>
        <a href="#">
          <h4 className="mb-2 mt-6 text-2xl  text-center font-semibold tracking-tight text-[#2C4964] ">
            Appointment
          </h4>
        </a>
        <p className="mb-3 font-normal mt-4 text-wrap text-[#848484]">
          24 Hours Service Consequuntur sunt aut quasi enim aliquam quae harum
          pariatur laboris nisi ut aliquip
        </p>
      </div>

      <div className="md:max-w-[270px]  sm:max-w-md p-6 bg-white  rounded-md     shadow-xl ">
        <i className="fa-solid fa-headset mx-[100px] text-3xl text-[#1977cc] "></i>
        <a href="#">
          <h5 className="mb-2  mt-6 text-2xl font-semibold text-center tracking-tight text-[#2C4964]">
            Emegency Cases
          </h5>
        </a>{" "}
        <a href="#">
          <h5 className=" mt-6  font-semibold text-center tracking-tight text-[#848484]">
            +91 8444444444444
          </h5>
        </a>
        <p className="mb-3 font-normal text-[#848484]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facilis
          perferendis quia maxime. Laborum excepturi pariatur laboriosam nihil,
          dolor molestias.
        </p>
      </div>

      <div className="md:max-w-[270px]  sm:max-w-md p-6 bg-white  rounded-md     shadow-xl ">
        <i className="fa-solid fa-clock mx-[100px] text-3xl text-[#1977cc]"></i>
        <a href="#">
          <h5 className="  mt-6 text-2xl text-center font-semibold tracking-tight text-[#2C4964]">
            Working Hours
          </h5>
        </a>
        <p className=" mt-4 font-normal text-center text-[#848484]">
          Time schedule.
        </p>
        <p className=" pt-2 pl-8  text-[#848484]">Sun - Wed: 8.00 -17:00</p>
        <hr className="mt-4" />
        <p className="pl-8  pt-2 text-[#848484]">Thus - Fri : 9:00 - 17: 00</p>
        <hr className="mt-6" />{" "}
        <p className="pl-8  pt-2 text-[#848484]">Sat - Sun : 10:00 - 17: 00</p>
        <hr className="mt-4 mb-4" />
      </div>
    </div>
  );
}

export default InfoPage;
