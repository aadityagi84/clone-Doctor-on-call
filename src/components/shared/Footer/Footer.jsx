import React from "react";
import Logo from "../../images/logo.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer bg-[#15558d] text-white   min-h-[50vh]">
      <div className="   mx-20   flex flex-wrap  gap-60 min-h-[40vh] mt-10">
        <span className="w-[20%] my-6   ">
          <img src={Logo} className="w-full  " alt="" />
          <p className="text-[#fff] px-10 py-4 text-[14px] ">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt
            <br /> ut labore et dolore magna aliqua
          </p>
        </span>
        <span className="w-10% text-[#fff]  ">
          <h1 className="text-[20px]  font-[700] my-6 ">For patients</h1>
          <ul id="footer" className="text-[15px]">
            <li>
              <i className="fa-solid fa-angles-right"></i> Search for Doctors
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i> Login
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i> Register
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i> Booking
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i> Patient Dashboard
            </li>
          </ul>
        </span>
        <span className="w-40% text-[#fff] ">
          <h1 className="text-[20px] font-[700] my-6">For Doctors</h1>
          <ul id="footer" className="text-[15px] ">
            <li>
              <i className="fa-solid fa-angles-right"></i> Search for Doctors
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i> Login
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i> Register
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i> Booking
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i> Patient Dashboard
            </li>
          </ul>
        </span>
        <span className="w-40%  text-[#fff]">
          <h1 className="text-[20px] font-[700] my-6 ">Contact Us</h1>
          <p className="mb-4">
            121, Mirzapure Union office, Sylhet, Bangladesh 03214
          </p>
          <p className="mb-4">+88 017 51 040425 </p>
          <p className="mb-4">ujjalzaman@gmail.com</p>
        </span>
      </div>
      <hr className=" border-blue-600" />
      <div className="flex justify-between mx-48 my-4 item-center">
        <div>
          <h1>Copyright2024 All Rights Reserved </h1>
        </div>
        <div>
          <h1>Terms and Conditions Policy </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
