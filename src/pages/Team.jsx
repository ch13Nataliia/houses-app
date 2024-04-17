// import React from 'react'
import BannerTeam from '../assets/3.png';

const bgImage = {
  backgroundImage: `url(${BannerTeam})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
};
function Team() {
  return (
    <>
      <div style={bgImage}>
        <img src={BannerTeam} alt="" />
      </div>
      <div>
        <h1 className="text-5xl uppercase text-center text-orange-800 m-6">
          our team
        </h1>
      </div>
      <div className="bg-orange-50/50 m-6">
        <div className="container grid grid-cols-1 gap-8 sm:gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3 place-items-center bg-ornage-50/50 p-4">
          <div className="shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dolore deleniti itaque cum maxime nemo, cupiditate,
            quidem sapiente consequatur iste accusantium aspernatur. Iste,
            soluta. Dignissimos dolore dicta atque delectus repudiandae!
          </div>
          <div className="shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dolore deleniti itaque cum maxime nemo, cupiditate,
            quidem sapiente consequatur iste accusantium aspernatur. Iste,
            soluta. Dignissimos dolore dicta atque delectus repudiandae!
          </div>
          <div className="shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dolore deleniti itaque cum maxime nemo, cupiditate,
            quidem sapiente consequatur iste accusantium aspernatur. Iste,
            soluta. Dignissimos dolore dicta atque delectus repudiandae!
          </div>
          <div className="shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dolore deleniti itaque cum maxime nemo, cupiditate,
            quidem sapiente consequatur iste accusantium aspernatur. Iste,
            soluta. Dignissimos dolore dicta atque delectus repudiandae!
          </div>

          <div className="shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dolore deleniti itaque cum maxime nemo, cupiditate,
            quidem sapiente consequatur iste accusantium aspernatur. Iste,
            soluta. Dignissimos dolore dicta atque delectus repudiandae!
          </div>
          <div className="shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dolore deleniti itaque cum maxime nemo, cupiditate,
            quidem sapiente consequatur iste accusantium aspernatur. Iste,
            soluta. Dignissimos dolore dicta atque delectus repudiandae!
          </div>
          <div className="shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dolore deleniti itaque cum maxime nemo, cupiditate,
            quidem sapiente consequatur iste accusantium aspernatur. Iste,
            soluta. Dignissimos dolore dicta atque delectus repudiandae!
          </div>
          <div className="shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dolore deleniti itaque cum maxime nemo, cupiditate,
            quidem sapiente consequatur iste accusantium aspernatur. Iste,
            soluta. Dignissimos dolore dicta atque delectus repudiandae!
          </div>
          <div className="shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dolore deleniti itaque cum maxime nemo, cupiditate,
            quidem sapiente consequatur iste accusantium aspernatur. Iste,
            soluta. Dignissimos dolore dicta atque delectus repudiandae!
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
