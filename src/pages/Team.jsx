// import React from 'react'
import BannerTeam from '../assets/3.png';
import Cat1 from '../assets/catChelsy.png';

const TeamData = [
  {
    id: 1,
    name: 'Name',
    title: 'position at work',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit magni corporis? Et delectus esse sapiente modi ipsum ea vitae quibusdam fugiat accusantium similique! Minima porro fuga fugit mollitia distinctio.',
    img: Cat1,
  },
    {
      id: 2,
      name: 'Name',
      title: 'position at work',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit magni corporis? Et delectus esse sapiente modi ipsum ea vitae quibusdam fugiat accusantium similique! Minima porro fuga fugit mollitia distinctio.',
      img: Cat1,
    },
    
    {
      id: 3,
      name: 'Name',
      title: 'position at work',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit magni corporis? Et delectus esse sapiente modi ipsum ea vitae quibusdam fugiat accusantium similique! Minima porro fuga fugit mollitia distinctio.',
      img: Cat1,
    },
    {
      id: 4,
      name: 'Name',
      title: 'position at work',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit magni corporis? Et delectus esse sapiente modi ipsum ea vitae quibusdam fugiat accusantium similique! Minima porro fuga fugit mollitia distinctio.',
      img: Cat1,
    },
    {
      id: 5,
      name: 'Name',
      title: 'position at work',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit magni corporis? Et delectus esse sapiente modi ipsum ea vitae quibusdam fugiat accusantium similique! Minima porro fuga fugit mollitia distinctio.',
      img: Cat1,
    },
    {
      id: 6,
      name: 'Name',
      title: 'position at work',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit magni corporis? Et delectus esse sapiente modi ipsum ea vitae quibusdam fugiat accusantium similique! Minima porro fuga fugit mollitia distinctio.',
      img: Cat1,
    },
];
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
        <div className="grid grid-cols-1 gap-8 sm:gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3 place-items-center p-4">
          {TeamData.map((data) => (
            <>
              <div className="rounded-2xl bg-white shadow-md hover:bg-orange-50/50 relative group max-w-[350px] p-4">
                <div>
                  <img src={Cat1} alt="" className='rounded-full w-40 h-40' />
                </div>
                <div className='text-orange-800 p-4'>
                  <h3 className='font-bold text-center'>{data.name}</h3>
                  <h4 className='font-bold text-center'> {data.title}</h4>
                  <p>{data.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
