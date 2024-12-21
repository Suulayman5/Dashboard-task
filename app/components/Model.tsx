"use client"
import { useState } from "react";
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
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-xl font-semibold">Engage with Jane Reyes</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="mt-4">
              {/* Profile and Info */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Jane Reyes"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">Jane Reyes</p>
                  <p className="text-gray-500 text-sm">COO | Northwind Traders</p>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 border border-blue-200 p-4 rounded-lg">
                Jane may be interested in upgrading espresso machines for her
                in-store coffee shops.
                <div className="flex justify-end mt-2">
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600">
                    Approve and Send
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center space-x-6 mt-4">
                <button className="font-bold border-b-2 border-blue-500 pb-1">
                  Engage
                </button>
                <button className="text-gray-500 hover:text-gray-700 pb-1">
                  Research
                </button>
              </div>

              {/* Why I picked this lead */}
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Why I picked this lead</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
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
