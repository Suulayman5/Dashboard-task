import ThemeToggle from './components/ThemeToggle';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <ThemeToggle>
      <div>
        <Sidebar/>
        <Navbar/>
      </div>
    </ThemeToggle>
  );
}
