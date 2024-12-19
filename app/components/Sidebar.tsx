import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <nav className="mt-4 space-y-2">
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <HomeIcon />
          <span>Home</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Recent</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <StarIcon />
          <span>Pinned</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>My work</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <HomeIcon />
          <span>Sales accelerator</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Dashboards</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <StarIcon />
          <span>Activities</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>Customers</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <HomeIcon />
          <span>Accounts</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Contacts</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>Sales</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <HomeIcon />
          <span>Leads</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Opportunites</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Competitors</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>Collateral</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <HomeIcon />
          <span>Quotes</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Orders</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Inovices</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Products</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Sales Literatures</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>Marketing</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <HomeIcon />
          <span>Marketing lists</span>
        </li>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Quick campaigns</span>
        </li>
      </nav>
      <nav className="mt-4 space-y-2">
        <h2>Sales</h2>
        <li className=" px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <HomeIcon />
          <span>Sales</span>
        </li>
      </nav>
    </aside>
  );
};
export default Sidebar