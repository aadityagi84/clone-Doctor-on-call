import React from 'react';
import { clinicData } from './ImgData';

function Clinic() {

  return (
    <div>
      <div className=" bg-[#F3F1F1] p-20 ">
        <div className="w-[80%] mx-auto text-center ">
          <h1 className='text-[#2c4964] text-[32px] mb-4 font-bold'>Clinic and Specialities</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

          <div className="flex flex-wrap items-center justify-center gap-14 mt-8   ">

            {
              clinicData.map((specialty, index) => (
                <div className="text-center hover:text-[#1977CC]   " key={index}>
                  <div className='w-[150px] h-[150px] border   border-white-600 shadow-md  bg-white rounded-full mx-auto  duration-[0.6s] hover:bg-[#c5c0c0] hover:text-[#1977CC] hover:scale-[1.1] '>
                    <img src={specialty.img} className='w-sm mt-10  overflow-none   mx-auto' />
                    <p className='text-[#212529] mt-14 font-semibold hover:text-[#1977CC]  '>{specialty.surgen}</p>
                  </div>
                </div>
              ))}
          </div></div> </div>






    </div>
  )
}

export default Clinic