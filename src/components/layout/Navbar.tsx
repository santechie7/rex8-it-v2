'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
// import DarkModeToggle from '../ui/darkModeToggle/DarkModeToggle';

type MenuItem = {
  label: string;
  path?: string;
  submenu?: MenuItem[];
};

interface NavbarProps {
  menuItems: MenuItem[];
  brandName: string;
}

const Navbar: React.FC<NavbarProps> = ({ menuItems, brandName }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
   const router = useRouter();

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const isActive = (path?: string) => {
    if (!path) return false;
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <header className="bg-color-background text-color-foforeground w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <div className="flex items-start flex-col" onClick={() => router.push('/')}>
  <span className="text-2xl font-semibold text-primary tracking-[-0.5px]">
    REX EIGHT IT
  </span>
  <span className="text-[0.75rem] text-secondary uppercase tracking-[1.5px] font-medium">
   Data Analytics & Application Development
  </span>
</div>

        {/* Hamburger button for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <span className="text-3xl">&times;</span> : <span className="text-3xl">&#9776;</span>}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {/* Example DarkModeToggle component placeholder */}
          {/* <DarkModeToggle /> */}

        <ul className="flex gap-12 list-none items-center">
  {menuItems.map((item, i) => (
    <li key={i} className="relative group">
      {item.submenu ? (
        <>
          <span className="cursor-pointer py-2 block">{item.label}</span>
          <ul className="absolute left-0 bg-gray-800 mt-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-50 min-w-[150px]">
            {item.submenu.map((subitem, idx) => (
              <li key={idx}>
                <Link
                  href={subitem.path || '#'}
                  className={`block px-4 py-2 hover:bg-gray-700 ${
                    isActive(subitem.path) ? 'bg-gray-700 font-semibold' : ''
                  }`}
                >
                  {subitem.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          href={item.path || '#'}
          className={`relative block py-2 hover:text-secondary ${
            isActive(item.path) ? 'text-secondary font-semibold' : ''
          }`}
        >
          {item.label}
          <span className="absolute bottom-[-5px] left-0 h-[2px] w-0 bg-secondary transition-[width] duration-300 group-hover:w-full"></span>
        </Link>
      )}
    </li>
  ))}
</ul>

        </nav>
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-secondary shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <div className="flex items-start flex-col ">
  <span className="text-2xl font-semibold text-primary tracking-[-0.5px]">
    REX EIGHT IT
  </span>
</div>
          <button onClick={toggleMobileMenu} aria-label="Close menu" className="text-3xl">
            &times;
          </button>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, i) =>
              item.submenu ? (
                <li key={i} className="space-y-2">
                  <span className="block font-semibold">{item.label}</span>
                  <ul className="ml-4 flex flex-col space-y-1">
                    {item.submenu.map((subitem, idx) => (
                      <li key={idx}>
                        <Link
                          href={subitem.path || '#'}
                          onClick={toggleMobileMenu}
                          className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                            isActive(subitem.path) ? 'bg-gray-700 font-semibold' : ''
                          }`}
                        >
                          {subitem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={item.path || '#'}
                    onClick={toggleMobileMenu}
                    className={`block px-2 py-2 rounded hover:bg-gray-700 ${
                      isActive(item.path) ? 'bg-gray-700 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* Overlay to close sidebar by clicking outside */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>

  );
};

export default Navbar;
