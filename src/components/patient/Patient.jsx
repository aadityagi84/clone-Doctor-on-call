import React from "react";
import img1 from "./price -cheetah.jpg";

function Patient() {
  const user = JSON.parse(localStorage.getItem("username"));
  const img =
    "https://voice.ons.org/sites/default/files/2018-12/1000_iStock-481073846.jpg";
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-10 mx-auto">
      <img className="w-full" src={img} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #typhiod
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #sick
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #lack of blood
        </span>
      </div>
    </div>
  );
}

export default Patient;
