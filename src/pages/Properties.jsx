// import React from 'react'
import Img1 from '../assets/housesImg/one.webp';
import Img2 from '../assets/housesImg/secondHouse1.webp';
import Img3 from '../assets/housesImg/thirdHouse1.webp';
import Img4 from '../assets/housesImg/FoursHouse1.webp';
import Img5 from '../assets/housesImg/fiveHouse1.webp';
import Img6 from '../assets/housesImg/sixHouse1.webp';

import BannerProp from '../assets/2.png';

import TravelImage from '../assets/travelbox.png';
import { FaCircleQuestion } from "react-icons/fa6";
import { MdBedroomParent } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { MdApartment } from "react-icons/md";




const bgImage = {
  backgroundImage: `url(${BannerProp})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
};
function Properties() {
  const ServisesData = [
    {
      id: 1,
      title: 'House One',
      link: '/',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
      img: Img1,
    },
    {
      id: 2,
      title: 'House Two',
      link: '/#',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
      img: Img2,
    },
    {
      id: 3,
      title: 'House Three',
      link: '/#',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
      img: Img3,
    },
    {
      id: 4,
      title: 'House Three',
      link: '/#',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
      img: Img4,
    },
    {
      id: 5,
      title: 'House Three',
      link: '/#',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
      img: Img5,
    },
    {
      id: 6,
      title: 'House Three',
      link: '/#',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
      img: Img6,
    },
  ];


  return (
    <>
    <div data-aos="zoom-in" style={bgImage}><img src={BannerProp} alt="" /></div>
      <div className="py-10">
        <div className="container">
          {/* header */}
          <div
           data-aos="zoom-in"
           className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl">Properties for Rent</h1>
            <p className="text-xs text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              eligendi rerum dolore et soluta! Voluptates laudantium, quo
              pariatur veritatis explicabo, debitis cupiditate aperiam, in
              inventore molestias ut voluptatibus architecto sunt! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Velit molestiae
              impedit reiciendis nam tempora facilis rem est, laudantium
              blanditiis exercitationem repellat error illo harum dolor earum
              alias nisi ea deleniti?
            </p>
          </div>
          <div 
          data-aos="fade-up"  
          className="grid grid-cols-1 gap-8 sm:gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3 place-items-center">
            {ServisesData.map((data) => (
              <>
                <div className="rounded-2xl bg-white shadow-md hover:bg-orange-50/50 relative group max-w-[400px]  ">
                  <div className="h-[250px]">
                    <img src={data.img} alt="photos" />
                  </div>
                  <div className=" text-center p-4 ">
                    <h2 className="text-2xl font-bold uppercase">
                      {data.title}
                    </h2>
                    <p>{data.description}</p>
                    <button
                      onClick={() => {}}
                      className="bg-orange-200/50 p-2 rounded-xl duration-200 hover:scale-105 m-4"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="min-h-[550px]">
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image section */}
            <div data-aos="flip-up">
              <img
              data-aos='flip-up'
                src={TravelImage}
                alt="image"
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
              />
            </div>
            {/* Text content section */}
            <div>
              <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
              Make the right choice with us
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi nobis, eaque esse a vero quo eos nihil error magnam
                expedita repellat architecto voluptas quidem modi laborum quas
                quia! Labore, molestias. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Temporibus enim itaque, odio ut, recusandae
                fugiat laborum nobis, repellendus sed ullam nesciunt delectus
                earum aliquid mollitia maiores provident harum exercitationem
                cum.
              </p>
              <div data-aos = 'zoom-in' className='grid grid-cols-2 gap-6 '>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <FaHouseUser className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                    <p>Houses</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdBedroomParent  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100" />
                    <p>Rooms</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MdApartment  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100" />
                    <p>Apartments</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCircleQuestion   className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100" />
                    <p>Foods</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default Properties;
