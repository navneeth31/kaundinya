/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (isOpen && !e.target.closest('#dropdown') && !e.target.closest('#menu-toggle')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  return (
    <header className="bg-slate-900 text-white relative z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
            <img src="/images/logo.png" alt="Logo" className="h-12 mr-3 p-2" />
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-6">
          <div className="flex justify-between items-center font-lato text-gray-400 gap-6">
            <Link to="/" className="hover:text-green-400">Home</Link>
            <Link to="/about" className="hover:text-green-400">About</Link>
            <Link to="/contact" className="hover:text-green-400">Contact Us</Link>
            <Link to="/volunteer" className="hover:text-green-400">Volunteer</Link>
          </div>
        </nav>
        <div className="flex items-center space-x-4"> 
          <button className="overflow-hidden w-32 p-2 h-12 bg-slate-700 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">Donate
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Donate</span>
          </button>

          <div id="menu-toggle" className="lg:hidden">
            <i className="fa-solid fa-bars cursor-pointer " onClick={toggleMenu}></i>
          </div>
        </div>
      </div>
      {isOpen && (
        <div id="dropdown" className="lg:hidden absolute top-full left-0 w-full bg-gray-700 bg-opacity-80 backdrop-blur-lg">
          <nav className="flex flex-col space-y-4 p-4 text-gray-200">
            <Link to="/" className="hover:text-green-400" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="hover:text-green-400" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="hover:text-green-400" onClick={toggleMenu}>Contact Us</Link>
            <Link to="/volunteer" className="hover:text-green-400" onClick={toggleMenu}>Volunteer</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
