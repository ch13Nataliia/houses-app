// import React from 'react'
import Img1 from '../assets/housesImg/house1.jpg';

function HouseOne() {
  return (
    <div className=" mb-4 lg:container md:container sm:w-full">
      {/* title section */}

      <div className="flex flex-col gap-4 mt-6 mb-4 ">
        <h1 className="text-5xl font-bold">Title of the House One</h1>
        <div className="flex gap-4 ">
          <button className="bg-gray-500 text-white w-fil p-4 text-2xl font-bold">
            For Sale
          </button>
          <button className="bg-lime-600/70 text-white w-fil p-4 text-2xl font-bold">
            {' '}
            &pound;250,000
          </button>
        </div>
      </div>

      <div className="grid  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 ">
        <div className="col-span-2">
          <div>
            <img src={Img1} alt="" width="100%" height="250px" />
          </div>
          <div className="mt-10">
            <ul className="flex gap-2 mt-2 mb-2">
              <li>
                <img src={Img1} alt="" width="full" height="30%" />
              </li>
              <li>
                <img src={Img1} alt="" width="full" height="20%" />
              </li>
              <li>
                <img src={Img1} alt="" width="full" height="20%" />
              </li>
              <li>
                <img src={Img1} alt="" width="full" height="20%" />
              </li>
            </ul>
          </div>

          <div className="mt-20" id="tab_menu">
            <div className="flex gap-2 w-fit" id="tabs_titles">
              <div className=" bg-orange-100/50 font-bold text-3xl p-6 ">
                Full Details
              </div>
              <div className=" bg-orange-400 text-white  font-bold text-3xl p-6">
                Floor Plans
              </div>
              <div className=" bg-orange-400 text-white font-bold text-3xl p-6">
                Area Map
              </div>
            </div>

            <div
              className="flex flex-col gap-2 p-4 bg-orange-100/50 "
              id="tab_content"
            >
              <p className="text-2xl leading-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia, nobis? Inventore architecto earum omnis nam, veniam
                aliquid voluptates debitis necessitatibus sapiente nostrum
                voluptate pariatur non nisi laboriosam explicabo modi neque.
              </p>
              <h2 className="text-2xl font-bold">Location</h2>
              <p className="text-2xl leading-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                provident accusamus iste consectetur perferendis soluta quis a
                facere accusantium dolores reiciendis inventore ipsa enim, fugit
                culpa et exercitationem tempore voluptatibus!
              </p>
              <h2 className="text-2xl font-bold">Ground Floor</h2>
              <p className="text-2xl leading-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                provident accusamus iste consectetur perferendis soluta quis a
                facere accusantium dolores reiciendis inventore ipsa enim, fugit
                culpa et exercitationem tempore voluptatibus!
              </p>
              <h2 className="text-2xl font-bold">First Floor</h2>
              <p className="text-2xl leading-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                provident accusamus iste consectetur perferendis soluta quis a
                facere accusantium dolores reiciendis inventore ipsa enim, fugit
                culpa et exercitationem tempore voluptatibus! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Similique assumenda harum
                omnis doloremque. Facilis voluptatibus rem officia, neque rerum
                aliquam mollitia nobis repellat fugit voluptatem inventore
                veniam, quas nam nostrum.
              </p>
              <h2 className="text-2xl font-bold">Externally</h2>
              <p className="text-2xl leading-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                provident accusamus iste consectetur perferendis soluta quis a
                facere accusantium dolores reiciendis inventore ipsa enim, fugit
                culpa et exercitationem tempore voluptatibus! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Similique assumenda harum
                omnis doloremque. Facilis voluptatibus rem officia, neque rerum
                aliquam mollitia nobis repellat fugit voluptatem inventore
                veniam, quas nam nostrum.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4 leading-loose text-2xl">
          <div className="bg-orange-100/50 p-4">
            <h2 className="text-4xl font-bold mt-4 mb-4">Summary:</h2>
            <ul>
              <li>Ref: 3292</li>
              <li>Type: Farm House</li>
              <li>Availability: For Sale</li>
              <li>Bedrooms: 5</li>
              <li>Bathrooms: 2</li>
            </ul>
            <h2 className="text-4xl font-bold mt-4 mb-4">Property Features:</h2>
            <ul className="text-2xl leading-loose	">
              <li>
                Imposing and attractive, stone built five bedroom detached
                farmhouse
              </li>
              <br />
              <li>
                A range of steel portal framed and traditional stone built
                buildings
              </li>
              <br />
              <li>Suitable for smallholding and agricultural use</li>
              <li>
                Potential for conversion and business use, subject to the
                necessary consents
              </li>
              <li>5.66 acres of grassland</li>
              <li>In the Peak District National Park.</li>
            </ul>
          </div>

          <div className=" flex flex-col text-2xl font-bold bg-gray-300/50 p-4 gap-4">
            <h2>Are you interested in this property?</h2>
            <p className="text-orange-800 text-4xl">0123 456 789</p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="bg-lime-700/50 text-white text-center font-bold p-4">
              Make Enquiry
            </div>
            <div className="bg-lime-700/50 text-white text-center font-bold p-4">
              Download documents
            </div>
            <div className="bg-lime-700/50 text-white text-center font-bold p-4">
              View EPC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseOne;
