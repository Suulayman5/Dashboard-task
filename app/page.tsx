import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Topbar } from './components/Topbar';
import Dashboard from './components/Dashboard';
import SearchList from './components/SearchList';
import Model from './components/Model';

export default function Home() {
  return (
    <div className="flex flex-col w-[700px] md:w-[1950px] bg-gray-300">
    {/* Topbar */}
    <Topbar />
  
    {/* Main Content Area */}
    <div className="flex flex-1">
      {/* Sidebar */}
      <div className="">
        <Sidebar />
      </div>
  
      {/* Navbar */}
      <div className="flex-1">
        <Navbar />
        <Dashboard/>
        <SearchList/>
        {/* <Model/> */}
        {/* Your other components can be added here */}
      </div>
    </div>
  </div>
  
  );
}
