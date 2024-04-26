import BannerRooms from '../components/Hero/BannerRooms';
import Testimaonials from '../components/Testimonials/Testimaonials';

function Rooms() {
  return (
    <>
      <div data-aos="zoom-in">
        <BannerRooms />
      </div>
      <div className="container">
        <h1>Rent just Room</h1>
        <p>
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
      data-aos="flip-up"
      className="container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="shadow-md m-2 p-2">One</div>
        <div className="shadow-md m-2 p-2">Two</div>
        <div className="shadow-md m-2 p-2">Tree</div>
        <div className="shadow-md m-2 p-2">Four</div>
        <div className="shadow-md m-2 p-2">Five</div>
        <div className="shadow-md m-2 p-2">Six</div>
      </div>
      <Testimaonials />
    </>
  );
}

export default Rooms;
