"use client"
import { useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Photo1 from '../public/pexels-andrea-bova-1169228-2883383.jpg'
import Image from "next/image";
import Linkedin from '../public/linkedin-logo.png'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface ModelProps {
    onClose: () => void; // Function type for the onClose handler
  }

const Model = ({onClose}: ModelProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 overflow-scroll">
          <div className="bg-gray-100 rounded-lg shadow-lg w-full max-w-[1200px] p-6 relative">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4 bg-white p-2 rounded-2xl">
              <h3 className="text-xl font-semibold">Engage with Jane Reyes</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <CloseOutlinedIcon/>
              </button>
            </div>

            {/* Body */}
            <div className="mt-4">
              {/* Profile and Info */}
              <div className="flex items-center space-x-4 bg-white p-2 rounded-2xl">
              <Image src={Photo1} width={20} height={21} alt='icon' className="w-12 h-12 rounded-full"/>

                <div className="">
                    <div className="flex justify-between gap-16 w-[500px] ">
                        <p className="font-bold">Jane Reyes</p>
                        <button
                            className="md:hidden text-gray-500 hover:text-gray-700 "
                            onClick={closeModal}
                        >
                            <CloseOutlinedIcon/>
                        </button>
                    </div>
                  <p className="text-gray-700 text-sm flex gap-1"> <span><Image src={Linkedin} width={18} height={4} alt="linkedin icon"/></span> | COO, Northwind Traders</p>
                </div>
              </div>
              <div className="bg-white p-4 mt-3 rounded-2xl">
            <div className="flex justify-between mt-4 bg-purple-100 border p-4 rounded-2xl">
              <div className="text-blue-500 md:mt-2 flex">
              <AutoAwesomeIcon className=' text-purple-500 mr-4'/>
                <span>
                    Jane may be interested in upgrading espresso machines for her
                    in-store coffee shops.
                </span>
                </div>
                <div className="flex justify-between gap-3">
                    <div className="flex justify-between text-center md:bg-white p-2 md:px-3 rounded-lg text-md text-purple-500 gap-2 md:shadow-md">
                        <EditOutlinedIcon/> <span className="hidden md:block">Edit</span>
                    </div>
                    <div className="md:bg-gradient-to-r from-blue-500 to-purple-500  text-purple-400 md:text-white flex justify-between p-2 gap-2 md:px-4 rounded-lg text-sm">
                    <SendOutlinedIcon/> <span className="hidden md:block">Approve and Send</span>
                    </div>
                </div>
                </div>

              {/* Tabs */}
              <div className="flex items-center space-x-6 mt-4 cursor-pointer shadow-lg p-3 rounded-md">
                <button className="focus:font-bold border-b-4 hover:border-blue-700 pb-1">
                  Engage
                </button>
                <button className="focus:font-bold border-b-4 hover:border-blue-700 pb-1">
                  Research
                </button>
              </div>
              </div>

              {/* Why I picked this lead */}
              <div className="bg-white p-3 m-3 rounded-2xl">
                <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100">
                    <div className="p-6 m-2">
                    <h4 className="font-semibold text-lg mb-2">Why I picked this lead</h4>
                    <ul className="list-disc m-3 list-inside text-gray-600 space-y-1">
                        <li>
                        Jane is a key decision maker and was browsing 'espresso
                        machines' on First Coffee's website.
                        </li>
                        <li>
                        Multiple people at her company have reported 'slowness'
                        during service requests.
                        </li>
                        <li>
                        Northwind Traders currently see $200M in revenue from their
                        in-store coffee shops.
                        </li>
                    </ul>
                    </div>

                    {/* Lead Stats */}
                    <div className="mt-4 flex space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-100 text-blue-500 rounded-full p-2">
                        📊
                        </div>
                        <div>
                        <p className="text-sm font-semibold">Decision Maker</p>
                        <p className="text-sm">Yes</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="bg-yellow-100 text-yellow-500 rounded-full p-2">
                        💰
                        </div>
                        <div>
                        <p className="text-sm font-semibold">
                            Potential Deal Value
                        </p>
                        <p className="text-sm">$1M</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="bg-red-100 text-red-500 rounded-full p-2">
                        📈
                        </div>
                        <div>
                        <p className="text-sm font-semibold">Intent</p>
                        <p className="text-sm">High</p>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
              {/* About Jane */}
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">About Jane</h4>
                <p className="text-gray-600 text-sm leading-6">
                  Jane Reyes, the Chief Operating Officer of Northwind Traders,
                  is a dynamic leader with a proven track record in optimizing
                  operations and enhancing customer experiences. Under her
                  guidance, Northwind Traders’ in-store coffee shops have
                  flourished, becoming a hallmark of quality and innovation.
                  Jane’s commitment to excellence makes her an ideal partner for
                  First Coffee. She is always seeking top-tier equipment to
                  elevate her coffee shops’ offerings, ensuring consistent,
                  high-quality service.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-between items-center border-t pt-4 text-sm">
              <p className="text-gray-500">Showing 1 of 9</p>
              <button className="text-blue-500 hover:underline">Show all</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
