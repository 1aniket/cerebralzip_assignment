import React from 'react'
import { CiSettings } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GrBarChart } from "react-icons/gr";
import { GoWorkflow } from "react-icons/go";
import { LuUnplug } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsAmd } from "react-icons/bs";
import Avatar from '../assets/boy.png';


export const Navigation = () => {
  return (
    <div className='flex flex-col text-center  w-[100%] h-[100vh] justify-between py-2'>
     <div className='text-lg flex gap-3 text-left items-center mt-5'>
         <BsAmd /><h1 className='font-bold '>SalesWay</h1>
      </div>
     <div className='flex flex-col gap-3 mb-5'>
        <div className='flex gap-2 justify-left items-center text-lg text-gray-700 rounded-[10px] px-2 py-2'>
        <CiSettings /><p className=' font-medium'>Settings</p>
        </div>
        <div className='flex gap-2 justify-left items-center text-lg text-gray-700 rounded-[10px] px-2 py-2'>
        <FaRegUserCircle /><p className=' font-medium'>Team</p>
        </div>
      
      <div className='text-left'>
        <h5 className='font-bold text-gray-600 mb-4'>MENU</h5>
        <div className='flex flex-col gap-3'>
          <div className='selected-menu flex gap-2 justify-left items-center  text-lg text-gray-700 rounded-[10px] px-2 py-2'>
          <MdDashboard color='#007FFF'/><p className=' font-medium '>Dashboard</p>
          </div>
          <div className='flex gap-2 justify-left items-center text-lg text-gray-700 rounded-[10px] px-2 py-2'>
          <GrBarChart /><p className=' font-medium'>Campaigns</p>
          </div>
          <div className='flex gap-2 justify-left items-center text-lg text-gray-700 rounded-[10px] px-2 py-2'>
          <GoWorkflow /><p className=' font-medium'>Flows</p>
          </div>
          <div className='flex gap-2 justify-left items-center text-lg text-gray-700 rounded-[10px] px-2 py-2'>
          <LuUnplug /><p className=' font-medium'>Integrations</p>
          </div>
          <div className='flex gap-2 justify-left items-center text-lg text-gray-700 rounded-[10px] px-2 py-2'>
          <TfiMenuAlt /><p className=' font-medium'>Team</p>
          </div>
        </div>
      </div>
      </div>
     <div className='flex gap-2 items-center'>
     

        <img src={Avatar} alt="Avatar" width={40} />
        <p className='text-md font-bold'>Aniket Bhogawar</p>
     </div>
    </div>

      
  
  )
}

export default Navigation;