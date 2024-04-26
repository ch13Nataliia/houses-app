// import React from 'react'
import Img1 from '../assets/housesImg/three.webp';
import BannerTwo from '../components/Hero/BannerTwo';
import Testimaonials from '../components/Testimonials/Testimaonials';

function AboutUs() {
  return (
    <>
      <div data-aos="zoom-in">
        <BannerTwo />
      </div>
      <div className="text-center  mx-auto">
        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-200 p-4 ">
          Info About Our Company
        </h1>
        <div
          data-aos="zoom-out"
          className="container grid grid-cols-1 md:grid-cols-2 my-2 justify-between gap-2"
        >
          <div className="opacity-70">
            <img src={Img1} alt="" className="rounded-md" />
          </div>
          <div className="text-xl justify-center text-center">
            <p className="my-8 text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              itaque molestiae deserunt illo facere expedita culpa neque
              provident doloribus, molestias temporibus tempore, laborum alias
              voluptatem error, optio quaerat praesentium ipsam.
            </p>
          </div>
        </div>
        <Testimaonials />
      </div>
    </>
  );
}

export default AboutUs;
