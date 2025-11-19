import React, { useState } from 'react';
import { Shield, Menu, X, Phone } from 'lucide-react';

const Navbar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page) => {
    setPage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNav('home')}>
            <Shield className="h-8 w-8 text-red-500" />
            <span className="font-bold text-xl tracking-wider uppercase">
              NashaSe<span className="text-red-500">Azaadi</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => handleNav('home')} className="hover:text-red-400 transition-colors px-3 py-2 rounded-md font-medium">Home</button>
              <button onClick={() => handleNav('types')} className="hover:text-red-400 transition-colors px-3 py-2 rounded-md font-medium">Types</button>
              <button onClick={() => handleNav('effects')} className="hover:text-red-400 transition-colors px-3 py-2 rounded-md font-medium">Effects</button>
              <button onClick={() => handleNav('signs')} className="hover:text-red-400 transition-colors px-3 py-2 rounded-md font-medium">Signs</button>
              <button onClick={() => handleNav('sayno')} className="hover:text-red-400 transition-colors px-3 py-2 rounded-md font-medium">Say No</button>
              <button onClick={() => handleNav('helpfriend')} className="hover:text-red-400 transition-colors px-3 py-2 rounded-md font-medium">Help Friend</button>
              <button onClick={() => handleNav('helplines')} className="hover:text-red-400 transition-colors px-3 py-2 rounded-md font-medium">Helplines</button>
              <button onClick={() => handleNav('faq')} className="hover:text-red-400 transition-colors px-3 py-2 rounded-md font-medium">FAQ</button>
              {/* About Moved to End */}
              <button onClick={() => handleNav('about')} className="hover:text-red-400 transition-colors px-3 py-2 rounded-md font-medium">About</button>
              
              <a href="tel:1933" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-red-500/50 flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" /> Report: 1933
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-slate-800 pb-4 px-4">
          <button onClick={() => handleNav('home')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-red-400">Home</button>
          <button onClick={() => handleNav('types')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-red-400">Types</button>
          <button onClick={() => handleNav('effects')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-red-400">Effects</button>
          <button onClick={() => handleNav('signs')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-red-400">Signs</button>
          <button onClick={() => handleNav('sayno')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-red-400">Say No</button>
          <button onClick={() => handleNav('helpfriend')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-red-400">Help Friend</button>
          <button onClick={() => handleNav('helplines')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-red-400">Helplines</button>
          <button onClick={() => handleNav('faq')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-red-400">FAQ</button>
          <button onClick={() => handleNav('about')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-red-400">About</button>
          <a href="tel:1933" className="block mt-4 px-3 py-2 rounded-md text-base font-bold bg-red-600 text-center">Report Abuse: 1933</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;