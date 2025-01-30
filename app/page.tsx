import Navbar from "./components/Navbar";
import HomePage from './components/HomePage'
import ProjectsPage from './components/Projects'

export default function Home() {
  return (
    <div className="relative w-screen overflow-hidden">
      <Navbar/>
      <HomePage/>
    </div>
  );
}
