import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import WifiCallingOutlinedIcon from '@mui/icons-material/WifiCallingOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

import VolumeMuteOutlinedIcon from '@mui/icons-material/VolumeMuteOutlined';

const Sidebar = () => {
  return (
    <aside className="w-52 text-gray-700  h-full shadow-lg hidden md:block">
      <nav className=" p-2">
        <li className=" px-4 py-2 flex items-center space-x-2">
          <ReorderOutlinedIcon/>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <HomeOutlinedIcon />
          <span>Home</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <ScheduleIcon />
          <span>Recent</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <PushPinOutlinedIcon />
          <span>Pinned</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2 className='font-bold px-4 text-black'>My work</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <RocketLaunchOutlinedIcon />
          <span>Sales accelerator</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <DashboardCustomizeOutlinedIcon />
          <span>Dashboards</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <NoteAltOutlinedIcon />
          <span>Activities</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2 className='font-bold px-4 text-black'>Customers</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <InsertDriveFileOutlinedIcon />
          <span>Accounts</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <Person2OutlinedIcon />
          <span>Contacts</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2 className='font-bold px-4 text-black'> Sales</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <WifiCallingOutlinedIcon />
          <span>Leads</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <BookOutlinedIcon />
          <span>Opportunites</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <PersonOutlinedIcon />
          <span>Competitors</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2 className='font-bold px-4 text-black'>Collateral</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <RequestQuoteOutlinedIcon />
          <span>Quotes</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <DescriptionOutlinedIcon />
          <span>Orders</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <SaveAsOutlinedIcon />
          <span>Inovices</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <HomeRepairServiceOutlinedIcon />
          <span>Products</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <AttachMoneyOutlinedIcon />
          <span>Sales Literatures</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2 className='font-bold px-4 text-black'>Marketing</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <FactCheckOutlinedIcon />
          <span>Marketing lists</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-whiterounded">
          <VolumeMuteOutlinedIcon />
          <span>Quick campaigns</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2 className='font-bold px-4 text-black'>Performance</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <div className="bg-purple-500 p-1">

          <AttachMoneyOutlinedIcon className=' text-white' />
          </div>
          <span>Sales</span>
        </li>
      </nav>
    </aside>
  );
};
export default Sidebar