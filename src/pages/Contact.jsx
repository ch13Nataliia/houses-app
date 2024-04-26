// import React from 'react'
import BannerContact from '../components/Hero/BannerContact';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneFlip } from 'react-icons/fa6';
import { FaCalendar } from 'react-icons/fa';

function Contact() {
  return (
    <div className="">
      <div data-aos="zoom-in" data-aos-duration="300">
        <BannerContact />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2  ">
        <div className="flex flex-col gap-4 mt-4 text-center">
          <h2 className="uppercase text-2xl mt-4">Get In Touch</h2>
          <h3 className="text-bold text-4xl">House Agency 101 </h3>

          <div className="flex gap-2 mt-10 ">
            <span>
              <FaLocationDot size={18} />
            </span>
            <p> 101 Drive Street HT12 2FR</p>
          </div>

          <div className="flex gap-2">
            <span>
              <FaPhoneFlip size={18} />
            </span>
            <p> + 12321 464684</p>
          </div>

          <div className="flex gap-2">
            <span>
              <FaCalendar size={18} />
            </span>
            <p> 10:00 - 18: 00, Mon - Sat</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-gray-500 text-2xl text-center m-6">
            Can not find the answer to your question? Our Customer Service is at
            your disposal:
          </h2>
          <div className="max-w-[600px] justify-center mx-auto">
            <span className="text-xs text-gray-500">
              Please complete the form below.
            </span>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2  px-2 py-1 mb-4 border rounded-md border-gray-300 dark:border-gray-500 dark:bg-gray-800 "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2  px-2 py-1 mb-4 border rounded-md border-gray-300 dark:border-gray-500 dark:bg-gray-800 "
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2  px-2 py-1 mb-4 border rounded-md border-gray-300 dark:border-gray-500 dark:bg-gray-800 "
            />
            <textarea
              className="w-full p-2  px-2 py-1 mb-4 border rounded-md border-gray-300 dark:border-gray-500 dark:bg-gray-800"
              rows="10"
            />
            <div className="flex items-center justify-center">
              <button className=" bg-gray-700 text-white rounded-lg pl-6 pr-6 pt-2 pb-2 text-xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4 rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.0367468295426!2d-3.771085922684826!3d50.23521840283674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486cdf1b68e9ffbf%3A0xa456a35954e59651!2sHarbour%20Hotel%20Salcombe!5e0!3m2!1sen!2suk!4v1713984701535!5m2!1sen!2suk"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          style={{ borderRadius: '10px' }}
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
