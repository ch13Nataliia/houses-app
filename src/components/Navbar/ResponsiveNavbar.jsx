// import React from 'react'
import { Link } from 'react-router-dom';
// import Menu from './Header';
const Menu = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/aboutus' },
  { id: 3, name: 'Team', link: '/team' },
  { id: 4, name: 'Contact', link: '/contact' },
  { id: 5, name: 'Best Choice', link: '/bestchoice' },
];
const DropLinks = [
  { id: 1, name: 'Houses', link: '/houses' },
  { id: 2, name: 'Apartments', link: '/apartments' },
  { id: 3, name: 'Rooms', link: '/rooms' },
];
// eslint-disable-next-line react/prop-types
function ResponsiveNavbar({ showMenu, setShowMenu }) {
  return (
    <div
      className={`${
        showMenu ? 'left-0' : '-left-[100%]'
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Menu.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

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
    </div>
  );
}

export default ResponsiveNavbar;
