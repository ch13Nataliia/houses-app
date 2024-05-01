// import React from 'react'
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { GiSpookyHouse } from 'react-icons/gi';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

import ResponsiveNavbar from './ResponsiveNavbar';

const Menu = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/aboutus' },
  { id: 3, name: 'Team', link: '/team' },
  { id: 4, name: 'Contact', link: '/contact' },
];
const DropLinks = [
  { id: 1, name: 'Houses', link: '/houses' },
  { id: 2, name: 'Rooms', link: '/rooms' },
];
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="shadow-md bg-orange-50 ">
        <div className="container py-3 sm:py-0 flex flex-row justify-between ">

          <div className="flex items-center justify-between ">
          <div>
               <a href="/">
              <GiSpookyHouse className="text-4xl" />
            </a>
          </div>
         
          </div>
          {/* menucsection */}
          <div className="flex items-center justify-between gap-4 font-semibold text-lg">
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id} >
                  <a href={menu.link} className='inline-block py-4 px-4 hover:text-primary duration-200'>{menu.name}</a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Best Choise
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-lg bg-white p-2 text-black group-hover:block shadow-md">
                  <ul className="space-y-3">
                    {DropLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-lg p-2 hover:bg-primary/10"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </>
  );
}

export default Header;
