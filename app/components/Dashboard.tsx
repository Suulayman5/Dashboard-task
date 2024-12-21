import Image from 'next/image';
import Photo1 from '../public/pexels-andrea-bova-1169228-2883383.jpg'
import Photo2 from '../public/pexels-arthousestudio-4621424.jpg'
const Dashboard = () => {
  return (
    <div className="p-6 bg-white text-gray-800 border border-blue-700 rounded-xl m-2">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold">
          Hi Mona, <span className="text-blue-700">68% </span> of goal achieved and rest can be achieved by focusing on 20 top leads.
        </h2>
        <p className=" mt-4 md:mt-8">
          Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
        </p>
      </div>

      <div className="md:flex md:flex-row flex-col w-full">
          <div className=" rounded-lg shadow-md p-4 mb-4 md:w-1/3 md:m-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={Photo1} alt="Jane Reyes" width={4} height={4} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Jane Reyes</h3>
                  <p className="text-gray-500 mt-2">COO - Northwind Traders</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 p-2 rounded-lg mt-2">
            <div className="flex">
                <span>Engage with Jane Reyes</span>
            </div>
            <p className="text-gray-700 mt-2 ">
              Jane may be interested in upgrading espresso machines for her in-store coffee shops.
            </p>
            </div>
            <p className="mt-4 text-gray-400 py-2 px-4 rounded">Expand business + High buying intent</p>
          </div>
          <div className=" rounded-lg shadow-md p-4 mb-4 md:w-1/3 md:m-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={Photo2} alt="Allan Munger" width={4} height={4} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Prepare for meeting with Allan</h3>
                  <p className="text-gray-500">Head of Real Estate Development - Contoso Coffee</p>
                </div>
              </div>
              <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">+</button>
            </div>
            <p className="text-gray-700 mt-4">
              Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.
            </p>
            <p className="text-gray-500 mt-2">Upcoming meeting - Due today</p>
          </div>
          <div className=" rounded-lg shadow-md p-4 mb-4 md:w-1/3 md:m-4">
            <h3 className="text-lg font-semibold mb-4">Other key activities</h3>
            <hr className="border-gray-200 mb-4" />

            <div className="flex items-center mb-4md:m-3">
              <Image src={Photo2} width={4} height={4} alt="Cafe A100" className="w-12 h-12 rounded-full" />
              <div className="ml-4 flex-1">
                <h4 className="text-md font-semibold">Cafe A100 for Woodland Bank</h4>
                <p className="text-gray-500">Review draft and reply to Chris Naido</p>
              </div>
              <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">+</button>
            </div>

            <div className="flex items-center">
              <Image src={Photo1} width={4} height={4} alt="Fabrikam" className="w-12 h-12 rounded-full" />
              <div className="ml-4 flex-1">
                <h4 className="text-md font-semibold">Partnership opportunity for Fabrikam</h4>
                <p className="text-gray-500">Prepare for Fabrikams key stakeholder meeting</p>
              </div>
              <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">+</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;


