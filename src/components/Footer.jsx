// import React from 'react'
import { GiSpookyHouse } from 'react-icons/gi';
<FaFacebook />;
import {
  FaLocationArrow,
  FaMobileAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';

const FooterLinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/aboutus' },
  { id: 3, name: 'Team', link: '/team' },
  { id: 4, name: 'Contact', link: '/contact' },
];

function Footer() {
  return (
    <>
      <div className="bg-orange-50 ">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 ">
            {/* company details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                <GiSpookyHouse />
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                voluptas, aspernatur eligendi minima impedit magni ab, provident
                ut, perferendis molestiae omnis est laudantium ratione. Vel
                nihil magnam facere possimus mollitia?
              </p>
              <br />

              <div className="flex items-center gap-3 mt-3">
                {' '}
                <FaLocationArrow className="text-2xl" />
                <p>10 Downing Street</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                {' '}
                <FaMobileAlt className="text-2xl" />
                <p>+145253536453</p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <a>
                  <FaFacebook className="text-2xl" />
                </a>
                <a>
                  <FaInstagram className="text-2xl" />
                </a>
                <a>
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className='py-8 px-4'>
                  <h1 className='sm:text-sm font-bold text-justify mb-3'>Important Links</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      <li
                        key={data.id}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                      >
                        {' '}
                        <span>&#11162;</span>
                        <a href={data.link}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="p-2">Information</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      <li
                        key={data.id}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                      >
                        {' '}
                        <span>&#11162;</span>
                        <a href={data.link}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="p-2">Important Links</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      <li
                        key={data.id}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                      >
                        {' '}
                        <span>&#11162;</span>
                        <a href={data.link}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
