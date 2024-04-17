// import React from 'react'
import Img1 from '../assets/housesImg/one.webp';
import Img2 from '../assets/housesImg/secondHouse1.webp';
import Img3 from '../assets/housesImg/thirdHouse1.webp';
import Img4 from '../assets/housesImg/FoursHouse1.webp';
import Img5 from '../assets/housesImg/fiveHouse1.webp';
import Img6 from '../assets/housesImg/sixHouse1.webp';

import BannerProp from '../assets/2.png';

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
    <div style={bgImage}><img src={BannerProp} alt="" /></div>
      <div className="py-10">
        <div className="container">
          {/* header */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
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
          <div className="grid grid-cols-1 gap-8 sm:gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3 place-items-center">
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
      </div>
    </>
  );
}

export default Properties;
