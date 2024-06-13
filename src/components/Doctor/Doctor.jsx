import React from "react";
import Doc from "./undraw_doctors_p6aq.svg";

function Doctor() {
  const user = JSON.parse(localStorage.getItem("username"));

  return (
    <div className="my-20 mx-10">
      <h1 className="text-center text-4xl shadow pb-10">Our doctors </h1>
      {user ? (
        <div className="max-w-sm bg-white mt-4 border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img className="rounded-t-lg p-20" src={Doc} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {user.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {user.role}
            </p>
            <a href="#" className="inline-flex">
              {user.email}
            </a>
          </div>
        </div>
      ) : (
        <p className="text-center mt-20">
          Please log in to patient profile view doctor information
        </p>
      )}
    </div>
  );
}

export default Doctor;
