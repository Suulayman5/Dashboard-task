import Image from 'next/image';
import Icon from '../public/copilot-icon.png'

const SearchList = () => {
  return (
    <div className="p-4 bg-white">
      {/* Search and Filter Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full md:w-1/3">
          {/* Input */}
          <input
            type="text"
            placeholder="Sort, filter and search and Copilot"
            className="text-gray-800 w-full px-3 py-2 border border-blue-600 rounded-lg shadow-sm focus:outline-none "
          />
          {/* Image */}
          <Image
            src={Icon}
            width={20}
            height={20}
            alt="icon"
            className="absolute top-2.5 right-3"
          />
        </div>
      </div>


      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full border-collapse ">
          <thead className=" border-b">
            <tr>

              <th className=" py-2 text-left text-sm font-medium text-gray-600"></th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Topic</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status Reason</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Created On</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "Winford Asher",
                topic: "Cafe A100 for commercial use",
                status: "New",
                createdOn: "4/02/2024 12:00 PM",
              },
              {
                name: "Josia Love",
                topic: "Upgrading service plan",
                status: "New",
                createdOn: "3/30/2024 7:45 AM",
              },
              {
                name: "Harrison Curtis",
                topic: "Issue with throughput on EspressoMaster",
                status: "New",
                createdOn: "3/28/2024 3:30 PM",
              },
              {
                name: "Jermaine Berrett",
                topic: "New roaster in distribution facility",
                status: "New",
                createdOn: "3/25/2024 11:05 AM",
              },
              {
                name: "Gerald Stephens",
                topic: "Concerns on current machines",
                status: "New",
                createdOn: "3/23/2024 4:50 PM",
              },
              {
                name: "Halle Griffiths",
                topic: "Expanding business",
                status: "New",
                createdOn: "3/21/2024 10:20 AM",
              },
              {
                name: "Rachel Michael",
                topic: "Addressing service concerns",
                status: "New",
                createdOn: "3/19/2024 1:15 PM",
              },
              {
                name: "Alex Baker",
                topic: "Premium coffee beans",
                status: "New",
                createdOn: "3/17/2024 8:00 AM",
              },
              {
                name: "Lilly Pyles",
                topic: "Cafe A100 bulk rate",
                status: "New",
                createdOn: "3/13/2024 2:45 PM",
              },
            ].map((row, index) => (
              <tr
                key={index}
              >
                  <td className=" py-2 text-sm">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b-2">{row.name}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b-2">{row.topic}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b-2">{row.status}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b-2">{row.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchList;
