import React from 'react'
import { GrProjects } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='flex items-start'>
      <div className='h-[100vh] w-64 bg-gray-200 shadow-2x1 text-gray-400 text-[15px]'>
        <div className='flex items-start gap-[19px] p-4'>
          <div className='bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-[8px]'><GrProjects/></div>
          <p className='mt-0.5 text-blue-600 text-[16px] font-semibold'>Projetos</p>
        </div>
        <ul>
        {}
      </ul>

      </div>

      <button className='bg-gray-300 shadow-lg rounded-full p-2 ms-[-20px] mt-4 transition-all duration-300'><IoIosArrowRoundForward/></button>

    </div>
  );
};

export default Sidebar
