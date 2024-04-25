// import React from 'react'
import Slider from 'react-slick';

const TestimonialData = [
  {
    id: 1,
    name: 'Peter Jones',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint nam quidem maiores ipsa. Dolores perspiciatis ratione distinctio doloremque eveniet! Asperiores cumque recusandae perferendis deserunt cupiditate, labore quidem rerum enim.',
    img: 'https://picsum.photos/101/101',
  },
  {
    id: 2,
    name: 'Nat Fox',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint nam quidem maiores ipsa. Dolores perspiciatis ratione distinctio doloremque eveniet! Asperiores cumque recusandae perferendis deserunt cupiditate, labore quidem rerum enim.',
    img: 'https://picsum.photos/102/102',
  },
  {
    id: 3,
    name: 'Evie Crouse ',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint nam quidem maiores ipsa. Dolores perspiciatis ratione distinctio doloremque eveniet! Asperiores cumque recusandae perferendis deserunt cupiditate, labore quidem rerum enim.',
    img: 'https://picsum.photos/103/103',
  },
];

function Testimaonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='pb-10'>
      <div className="container">
        {/* header */}
        <div className="text-center mt-6 mb-10 max-w-[700px] mx-auto">
          <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-200">
            What our clients sais
          </p>{' '}
          <h2 className="text-3xl font-bold text-orange-800">Best Choice</h2>
          <p className="text-md text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quam eligendi voluptatibus debitis harum provident quibusdam saepe
            aut optio reprehenderit, possimus numquam rem soluta eos dolorum
            veniam nobis eum et!
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className='my-6'>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-6 rounded-xl bg-orange-100/50 relative">
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className='text-sm text-gray-500'>{data.description}</p>
                      <p className='text-xl font-bold text-black/80'>{data.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}{' '}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimaonials;
