// import React from 'react'
import ImgBannerTwo from '../../assets/Sale.png';

function BannerTwo() {
  const bgImage = {
    backgroundImage: `url(${ImgBannerTwo})`,
    backgroundPOsition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  };
  return (
    <>
      <div className="min-h-[400px] sm:min-h-[450px] justify-center items-center opacity-50">
        <img src={ImgBannerTwo} alt="banner-two" style={bgImage} />
      </div>
    </>
  );
}

export default BannerTwo;
