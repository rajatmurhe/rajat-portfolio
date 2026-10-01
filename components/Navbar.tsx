'use client';
import { useState, useEffect } from 'react';
import { personal } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Work', 'Experience', 'Systems', 'About', 'Contact'];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#080d14]/80 backdrop-blur-md border-b border-gray-800/50 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-lg font-mono font-medium tracking-tight text-gray-200 hover:text-indigo-400 transition-colors z-50 relative">
          {personal.name.toLowerCase()}_
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-gray-100 transition-colors">
              {link}
            </a>
          ))}
          <a href={personal.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-colors border border-indigo-500/20">
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-400 hover:text-gray-200 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transform transition duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-current transition duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-current transform transition duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[#080d14] z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center gap-8`}>
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-gray-300 hover:text-indigo-400 transition-colors"
            >
              {link}
            </a>
          ))}
          <a href={personal.github} target="_blank" rel="noreferrer" className="mt-4 px-6 py-3 rounded-md bg-indigo-600 text-white font-medium">
            View Resume
          </a>
        </div>
      </div>
    </header>
  );
}
