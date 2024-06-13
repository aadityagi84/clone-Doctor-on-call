import React from 'react'

function Top_Header() {
  return (
    <div className='shadow-xl  '>
      <div className=" py-2 md:px-44 flex flex-wrap sm:px-0 sm:items-center justify-between shadow-md border border-gray-100 ">
        <div className="text-[#2C4964] flex flex-wrap items-center text-[13px]">
          <i className="fa-solid text-[#0d6efd] px-2 fa-envelope text-[12px]"></i>dr.doc@gmail.com
          <i className="fa-solid text-[#0d6efd] px-2 fa-phone text-[10px]"></i>+91 8765409432</div>
        <div className="">
          <i className="fa-brands  text-[#437099] px-2 text-[15px] fa-linkedin"></i>
          <i className="fa-brands  text-[#437099] px-2 text-[15px] fa-square-facebook"></i>
          <i className="fa-brands  text-[#437099] px-2 text-[15px] fa-square-github"></i>
          <i className="fa-brands  text-[#437099] px-2 text-[15px] fa-square-instagram"></i>

        </div>

      </div>



    </div>
  )
}

export default Top_Header 