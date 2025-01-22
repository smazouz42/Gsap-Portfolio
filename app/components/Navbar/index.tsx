import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar fixed top-0 w-full flex items-center justify-between px-12 py-4 border-b border-white/10 z-50 font-fira ">
        <span className="absolute bottom-0 h-0.5 w-16 bg-gradient-to-r from-transparent to-white animate-animate"></span>
        <div className="logo text-3xl cursor-pointer font-w text-white">DAIIIS</div>
        <ul className="menu flex gap-20 uppercase font-light text-xl">
          <li>
            <Link href="#about" className="text-white hover:opacity-80">
              about
            </Link>
          </li>
          <li>
            <Link href="#works" className="text-white hover:opacity-80">
              works
            </Link>
          </li>
          <li>
            <Link href="#casting" className="text-white hover:opacity-80">
              casting
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:opacity-80">
              contact
            </Link>
          </li>
        </ul>
        <div className="btn font-medium uppercase text-white hover:opacity-80 cursor-pointer">Github</div>
      </nav>
    </header>
  );
};

export default Navbar;
