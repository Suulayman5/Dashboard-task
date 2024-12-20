import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import StarIcon from '@mui/icons-material/Star';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';



import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
const Sidebar = () => {
  return (
    <aside className="w-52 text-gray-700 bg-gray-400 h-screen shadow-lg">
      <nav className="mt-4 space-y-2 p-2">
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
        <h2>Customers</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <Person2OutlinedIcon />
          <span>Accounts</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <Person2OutlinedIcon />
          <span>Contacts</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>Sales</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <HomeOutlinedIcon />
          <span>Leads</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <WorkIcon />
          <span>Opportunites</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <WorkIcon />
          <span>Competitors</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>Collateral</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <HomeOutlinedIcon />
          <span>Quotes</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <WorkIcon />
          <span>Orders</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <WorkIcon />
          <span>Inovices</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <WorkIcon />
          <span>Products</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <WorkIcon />
          <span>Sales Literatures</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>Marketing</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <HomeOutlinedIcon />
          <span>Marketing lists</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-whiterounded">
          <WorkIcon />
          <span>Quick campaigns</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>Sales</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-white rounded">
          <HomeOutlinedIcon />
          <span>Sales</span>
        </li>
      </nav>
    </aside>
  );
};
export default Sidebar