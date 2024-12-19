import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-6 text-xl font-bold">CRM Dashboard</div>
      <nav className="mt-4 space-y-2">
        <li className="block px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <HomeIcon />
          <span>Home</span>
        </li>
        <li className="block px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <WorkIcon />
          <span>Recent</span>
        </li>
        <li className="block px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 rounded">
          <StarIcon />
          <span>Pinned</span>
        </li>
      </nav>
    </aside>
  );
};

