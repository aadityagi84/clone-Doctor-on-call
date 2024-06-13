import React from "react";

function Contact() {
  return (
    <div>
      <div className="w-[75%] mx-auto my-20  flex-wrap  py-8 flex gap-4">
        <div className="w-[25%] h-[270px] bg-[#F8F9FA]  p-6   ">
          <h1 className="font-semibold text-xl text-[#2c4964] mt-2">
            Location :
          </h1>
          <p className="text-[#4b7dab] text-[14px] mt-2">
            1212 Dhaka, Kazi Nozrul Avenur, Sylhet, Bangladesh 03214
          </p>
          <h1 className="font-semibold text-xl text-[#2c4964   ] mt-2">
            Email :
          </h1>
          <p className="text-[#4b7dab] text-[14px] mt-2">
            ujjalzaman@gmail.com
          </p>
          <h1 className="font-semibold text-xl text-[#2c4964   ] mt-2">
            Call :
          </h1>
          <p className="text-[#4b7dab] text-[14px] mt-2 ">+88 01751 040425</p>
        </div>
        <div className="w-[70%] mx-auto bg-[#F8F9FA] rounded-lg overflow-hidden  text-[#2c4964   ]">
          <div className="py-4 px-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h2>
            <form action="#" method="POST">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <div className="mb-4 flex  flex-wrap gap-2 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-[49%] h-[50px] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="first Name"
                  required
                />
                <input
                  type="text"
                  id="name"
                  name="last name"
                  className="w-[49%] px-3 h-[50px] py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="last Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border h-[50px] rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />

                <label
                  htmlFor="Subject"
                  className="block text-gray-700  mt-5  text-sm font-bold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="text"
                  name="subject"
                  className="w-full px-3 py-2   border h-[50px] rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
