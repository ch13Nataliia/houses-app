import BannerHousesImg from '../../assets/BannerHouses.png';

function BannerHouse() {
  const bgImage = {
    // backgroundImage: `url(${BannerHousesImg})`,
    backgroundPOsition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  };
  return (
    <>
      <div className="min-h-[400px] sm:min-h-[450px] justify-center items-center opacity-90">
        <img src={BannerHousesImg} alt="banner-two" style={bgImage} />
      </div>
    </>
  );
}

export default BannerHouse;
