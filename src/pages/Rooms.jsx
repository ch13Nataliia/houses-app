import BannerRooms from '../components/Hero/BannerRooms';
import Testimaonials from '../components/Testimonials/Testimaonials';
import Img1 from '../assets/roomsImg/room1.jpg';
import Img2 from '../assets/roomsImg/room7.jpg';
import Img3 from '../assets/roomsImg/room3.jpg';
import Img4 from '../assets/roomsImg/room4.webp';
import Img5 from '../assets/roomsImg/room5.jpg';
import Img6 from '../assets/roomsImg/room6.jpg';
const RoomData = [
  {
    id: 1,
    title: 'Room One',
    link: '/',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
    img: Img1,
  },
  {
    id: 2,
    title: 'Room Two',
    link: '/#',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
    img: Img2,
  },
  {
    id: 3,
    title: 'Room Three',
    link: '/#',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
    img: Img3,
  },
  {
    id: 4,
    title: 'Room Four',
    link: '/#',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
    img: Img4,
  },
  {
    id: 5,
    title: 'Room Five',
    link: '/#',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
    img: Img5,
  },
  {
    id: 6,
    title: 'Room Six',
    link: '/#',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero doloribus cumque illum quasi ut amet quas sed voluptates minus non ratione impedit doloremque vel ipsa, totam aperiam at odit! ',
    img: Img6,
  },
];
function Rooms() {
  return (
    <>
      <div data-aos="zoom-in">
        <BannerRooms />
      </div>
      <div
        data-aos="zoom-out"
        className="container flex flex-col items-center mt-10 mb-20 max-w-[1300px]"
      >
        <h1 className="text-3xl font-bold uppercase mb-10">Rent Room</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
          consequuntur reiciendis iusto quis illum ducimus quibusdam explicabo
          suscipit error accusamus, voluptatibus ratione eos eligendi molestiae
          eveniet, nemo cumque autem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Lau dantium ut tenetur asperiores? Saepe numquam
          commodi maiores iste unde placeat laboriosam architecto deleniti nobis
          recusandae, nemo, dicta voluptatibus inventore, quia iure!
        </p>
       <br/>
        <p className="text-lg">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
          consequuntur reiciendis iusto quis illum ducimus quibusdam explicabo
          suscipit error accusamus, voluptatibus ratione eos eligendi molestiae
          eveniet, nemo cumque autem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laudantium ut tenetur asperiores? Saepe numquam
          commodi maiores iste unde placeat laboriosam architecto deleniti nobis
          recusandae, nemo, dicta voluptatibus inventore, quia iure!
        </p>
      </div>
      <div
        data-aos="zoom-out"
        className="grid grid-cols-1 gap-8 sm:gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3 place-items-center"
      >
        {RoomData.map((room) => (
          <div
            key={room.id}
            className="rounded-2xl bg-white shadow-md hover:bg-orange-50/50 relative group max-w-[400px]  "
          >
            <div className="h-[300px]">
              <img src={room.img} alt="photos" width="100%" height="150px" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-center m-2">
                {room.title}
              </h2>
            </div>
            <div>
              <p className="text-lg p-4">{room.description}</p>
            </div>
            <div className="flex items-center justify-center m-4">
              <button className="bg-primary/20 uppercase p-4 rounded-md">
                Call Us
              </button>
            </div>
          </div>
        ))}
      </div>
      <Testimaonials />
    </>
  );
}

export default Rooms;
