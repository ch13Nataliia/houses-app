// import React from 'react'
import BannerContact from '../components/Hero/BannerContact';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneFlip } from 'react-icons/fa6';
import { FaCalendar } from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <div>
        <BannerContact />
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 m-4  ">
        <div className="flex flex-col gap-4 m-6 ">
          <h2 className="uppercase text-2xl ">Get In Touch</h2>
          <div className="text-bold text-4xl">House Agency 101 </div>

          <div className="flex flex-col gap-6 ">
            <div className="flex gap-2">
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
        </div>

        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.0367468295426!2d-3.771085922684826!3d50.23521840283674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486cdf1b68e9ffbf%3A0xa456a35954e59651!2sHarbour%20Hotel%20Salcombe!5e0!3m2!1sen!2suk!4v1713984701535!5m2!1sen!2suk"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-gray-500 text-2xl text-center m-6">
          Cann not find the answer to your question? Our Customer Service is at
          your disposal:
        </h2>
        <div className="max-w-[600px] justify-center mx-auto">
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
