import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Topbar } from './components/Topbar';

export default function Home() {
  return (
      <div className='bg-gray-300'>
        <Topbar/>
        <div className="flex-1">
        <Sidebar/>
        </div>
        <Navbar/>
      </div>
  );
}
