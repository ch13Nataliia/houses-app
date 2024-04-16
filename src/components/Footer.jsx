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
  { id: 1, name: 'About', link: '/aboutus' },
  { id: 2, name: 'Properties', link: '/properties' },
  { id: 3, name: 'Team', link: '/team' },
  { id: 4, name: 'Contact', link: '/contact' },
]



function Footer() {
  return (
    <>
      <div className="bg-orange-200/50">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 ">
            <div className="flex flex-col py-4 px-2 gap-2">
              <h1>
                {' '}
                <GiSpookyHouse className="text-3xl" />
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                ex omnis earum rem deleniti optio tenetur{' '}
              </p>
              <br />

              <div className="flex items-center gap-2">
                <FaLocationArrow />
                <p>UK, 10 Street Drive</p>
              </div>
              <div className="flex items-center gap-2">
                <FaMobileAlt />
                <p>+12345678910</p>
              </div>
              <div className="flex flex-row gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-2xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-2xl">
                  <FaLinkedin />
                </a>
              </div>
              
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-3 md:pl-10'>
              <div >
                <div className='py-8 px-4  '>
                  <h1 className='p-2'>Important Links</h1>
                  <ul className='flex flex-col gap-3'>
                    {FooterLinks.map((data) => (
                      <li key={data.id}
                      className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'> <span>&#11162;</span><a href={data.link}>{data.name}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className='py-8 px-4'>
                  <h1 className='p-2'>Important Links</h1>
                  <ul className='flex flex-col gap-3'>
                    {FooterLinks.map((data) => (
                      <li key={data.id}
                      className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'> <span>&#11162;</span><a href={data.link}>{data.name}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className='py-8 px-4'>
                  <h1 className='p-2'>Important Links</h1>
                  <ul className='flex flex-col gap-3'>
                    {FooterLinks.map((data) => (
                      <li key={data.id}
                      className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'> <span>&#11162;</span><a href={data.link}>{data.name}</a></li>
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
