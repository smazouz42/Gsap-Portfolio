import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage'

export default function Home() {
  return (
    <>
      <Navbar/>
      <HomePage/>
      <section className="relative w-screen ">
      </section>

    </>
  );
}
