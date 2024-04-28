import Img1 from '../assets/housesImg/house1.jpg';
import Img2 from '../assets/housesImg/houseOne/houseOne1.jpg';
import Img3 from '../assets/housesImg/houseOne/houseOne2.jpg';
import Img4 from '../assets/housesImg/houseOne/houseOne4.jpg';

function HouseOne() {
  return (
    <div className=" mb-4 container ">
      {/* title section */}

      <div className="flex flex-col gap-4 mt-6 mb-4">
        <h1 className="text-4xl font-bold">Title of the House One</h1>
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

      <div className="grid  lg:grid-cols-3 sm:grid-cols-1 gap-2 ">
        <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
          <div>
            <img src={Img1} alt="" width="100%" height="250px" />
          </div>
          <div className="mt-10">
            <ul className="flex gap-2 mt-2 mb-2">
              <li>
                <img src={Img1} alt="" width="full" height="30%" />
              </li>
              <li>
                <img src={Img2} alt="" width="full" height="20%" />
              </li>
              <li>
                <img src={Img3} alt="" width="full" height="20%" />
              </li>
              <li>
                <img src={Img4} alt="" width="full" height="20%" />
              </li>
            </ul>
          </div>

          <div className="mt-20" id="tab_menu">
            <div className="flex gap-2 w-fit" id="tabs_titles">
              <div className=" bg-orange-100/50 font-bold lg:text-2xl sm:text-xl p-4 cursor-pointer ">
                Full Details
              </div>
              <div className=" bg-orange-400 text-white  font-bold lg:text-2xl sm:text-xl p-4 cursor-pointer">
                Floor Plans
              </div>
              <div className=" bg-orange-400 text-white font-bold lg:text-2xl sm:text-xl p-4 cursor-pointer">
                Area Map
              </div>
            </div>

            <div
              className="flex flex-col gap-2 p-4 bg-orange-100/50 "
              id="tab_content"
            >
              <p className="lg:text-xl sm:text-lg leading-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                provident accusamus iste consectetur perferendis soluta quis a
                facere accusantium dolores reiciendis inventore ipsa enim, fugit
                culpa et exercitationem tempore voluptatibus!
              </p>
              <h2 className="text-2xl font-bold">Location</h2>
              <p className="lg:text-xl sm:text-lg leading-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                provident accusamus iste consectetur perferendis soluta quis a
                facere accusantium dolores reiciendis inventore ipsa enim, fugit
                culpa et exercitationem tempore voluptatibus!
              </p>
              <h2 className="text-2xl font-bold">Ground Floor</h2>
              <p className="lg:text-xl sm:text-lgleading-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                provident accusamus iste consectetur perferendis soluta quis a
                facere accusantium dolores reiciendis inventore ipsa enim, fugit
                culpa et exercitationem tempore voluptatibus!
              </p>
              <h2 className="text-2xl font-bold">First Floor</h2>
              <p className="lg:text-xl sm:text-lg leading-10">
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
              <p className="lg:text-xl sm:text-lg leading-10">
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

        <div className=" flex flex-col gap-4  ">
          <div className="bg-orange-100/50 p-2">
            <h2 className="uppercase sm:text-xl lg:text-left sm:text-center  font-bold mt-2 mb-4">
              Summary:
            </h2>
            <ul className="lg:text-xl sm:text-lg lg:leading-loose md:leading-10 flex flex-col gap-2">
              <li>Ref: 3292</li>
              <li>Type: Farm House</li>
              <li>Availability: For Sale</li>
              <li>Bedrooms: 5</li>
              <li>Bathrooms: 2</li>
            </ul>
            <h2 className="uppercase sm:text-lg lg:text-left sm:text-center  font-bold mt-4 mb-4">
              Property Features:
            </h2>
            <div className="lg:text-xl sm:text-lg lg:leading-loose md:leading-10	 	">
              <li>
                Imposing and attractive, stone built five bedroom detached
                farmhouse
              </li>

              <li>
                A range of steel portal framed and traditional stone built
                buildings
              </li>

              <li>Suitable for smallholding and agricultural use</li>
              <li>
                Potential for conversion and business use, subject to the
                necessary consents
              </li>
              <li>5.66 acres of grassland</li>
              <li>In the Peak District National Park.</li>
            </div>
          </div>

          <div className=" flex flex-col lg:text-xl sm:text-lg font-bold bg-gray-300/50 p-4 gap-4 sm:text-center ">
            <h2>Are you interested in this property?</h2>
            <p className="text-orange-800 text-2xl">0123 456 789</p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="bg-lime-700/50 text-white text-center font-bold p-4 cursor-pointer">
              Make Enquiry
            </div>
            <div className="bg-lime-700/50 text-white text-center font-bold p-4 cursor-pointer">
              Download documents
            </div>
            <div className="bg-lime-700/50 text-white text-center font-bold p-4 cursor-pointer">
              View EPC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseOne;
