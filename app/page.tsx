import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Topbar } from './components/Topbar';
import Dashboard from './components/Dashboard';

export default function Home() {
  return (
    <div className="flex flex-col h-full md:w-[1950px] bg-gray-300">
    {/* Topbar */}
    <Topbar />
  
    {/* Main Content Area */}
    <div className="flex flex-1">
      {/* Sidebar */}
      <div className="w-52 mt--2">
        <Sidebar />
      </div>
  
      {/* Navbar */}
      <div className="flex-1">
        <Navbar />
        <Dashboard/>
        {/* Your other components can be added here */}
      </div>
    </div>
  </div>
  
  );
}
