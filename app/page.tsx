// import LoginPage from './components/Loader';
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage'
import ProjectsPage from './components/Projects'
import LoadingPage from './components/LoadingPage';

export default function Home() {
  return (
    <div className="relative w-screen overflow-hidden">
      
      <Navbar/>
      <HomePage/>
    </div>
  );
}
