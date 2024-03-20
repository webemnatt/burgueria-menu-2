'use client';
import React, { useState } from 'react';

interface MenuItem {
  id: string;
  name: string;
  href: string;
}

interface HeaderProps {
  headerList: MenuItem[];
  mobileList: MenuItem[];
}

const Header:React.FC<HeaderProps> = ({ headerList, mobileList }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-red-900 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-around items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">&#127828; Burgueria</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            onClick={toggleMenu}
            className={`text-3xl md:hidden cursor-pointer relative w-8 h-8 ${
              menuOpen ? 'toggle-btn' : ''
            }`}
          >
            <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 before:content-[''] transition-all duration-500 before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before: before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            {headerList.map((item: any) => (
              <a
                href={item.href}
                className="hover:opacity-90 hover:text-[#faec31]"
                key={item.id}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu ${
          menuOpen ? 'flex' : 'hidden'
        }`}
        onClick={toggleMenu}
      >
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          {mobileList.map((item: any) => (
            <a
              href={item.href}
              className="w-full text-center py-6 hover:opacity-90 hover:text-papayawhip-dark"
              key={item.id}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </section>
    </header>
  );
}

export default Header