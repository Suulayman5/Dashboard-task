"use client"

import Image from 'next/image';
import Photo1 from '../public/pexels-andrea-bova-1169228-2883383.jpg'
import Photo2 from '../public/pexels-arthousestudio-4621424.jpg'
import Icon from '../public/copilot-icon.png'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useState } from 'react';
import Model from './Model';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true); // Show the modal
      };
    
  return (
    <div className="p-6 shadow-2xl bg-white text-gray-800 border border-blue-700 rounded-xl m-3">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex gap-2 text-center">
            <div className="hidden md:block mt-1">

            <Image src={Icon} width={20} height={21} alt='icon'/>
            </div>
        <h2 className="text-xl font-bold">
          Hi Mona, <span className="text-blue-700">68% </span> of goal achieved and rest can be achieved by focusing on 20 top leads.
        </h2>
        </div>
        <p className=" mt-4 md:mt-8">
          Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
        </p>
      </div>

      <div className="md:flex md:flex-row flex-col w-full" >
          <div className=" rounded-lg shadow-md p-4 mb-4 md:w-1/3 md:m-4" onClick={handleCardClick}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={Photo1} alt="Jane Reyes" width={4} height={4} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Jane Reyes</h3>
                  <p className="text-gray-500 text-sm mt-2">COO - Northwind Traders</p>
                </div>
                
              </div>
            </div>
            <div className="bg-slate-200 p-2 rounded-lg mt-2">
            <div className="flex justify-between">
                <div className="flex gap-3">
                <EmailOutlinedIcon/>
                <span>Engage with Jane Reyes</span>
                </div>
                <div className="">

                <AutoAwesomeIcon className=' text-purple-500'/>
                </div>
            </div>
            <p className="text-gray-700 mt-2 ">
              Jane may be interested in upgrading espresso machines for her in-store coffee shops.
            </p>
            </div>
            <p className="mt-4 text-gray-400 py-2 px-4 rounded">Expand business + High buying intent</p>
            {isModalOpen && <Model  />}
    
          </div>
          <div className=" rounded-lg shadow-md p-4 mb-4 md:w-1/3 md:m-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={Photo2} alt="Allan Munger" width={4} height={6} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Allan Munger</h3>
                  <p className="text-gray-500 text-sm mt-2">Head of Real Estate Development - Contoso Coffee</p>
                </div>
              </div>
              
            </div>
            <div className="flex bg-slate-200 p-2 rounded-lg mt-2">
               <div className="">
                 <div className="flex gap-3">
                    <CalendarMonthOutlinedIcon/>
                    <span className="">
                    Prepare for a meeting with Allan
                    </span>
                 </div>
                
                 <p className=" mt-2">
                    Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.
                 </p>
              </div>
                <div className="">
                <AutoAwesomeIcon className=' text-purple-500'/>
                </div>
            </div>
            <p className="mt-4 text-gray-400 py-2 px-4 rounded">Upcoming meeting - Due today</p>
          </div>
          <div className=" rounded-lg shadow-md p-4 mb-4 md:w-1/3 md:m-4">
            <h3 className="text-lg font-semibold mb-4">Other key activities</h3>
            <div className="flex items-center mb-4 md:m-3">
              <Image src={Photo2} width={4} height={4} alt="Cafe A100" className="w-12 h-12 rounded-full" />
              <div className="ml-4 flex-1">
                <h4 className="text-md font-semibold">Cafe A100 for Woodland Bank</h4>
                <p className="text-gray-500">Review draft and reply to Chris Naido</p>
              </div>
              <AutoAwesomeIcon className=' text-purple-500'/>
            </div>

            <div className="flex items-center">
              <Image src={Photo1} width={4} height={4} alt="Fabrikam" className="w-12 h-12 rounded-full" />
              <div className="ml-4 flex-1">
                <h4 className="text-md font-semibold">Partnership opportunity for Fabrikam</h4>
                <p className="text-gray-500">Prepare for Fabrikams key stakeholder meeting</p>
              </div>
              <AutoAwesomeIcon className=' text-purple-500'/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;


