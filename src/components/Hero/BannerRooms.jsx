import BannerRoomsImg from '../../assets/RoomsBanner.png';

function BannerRooms() {
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
        <img src={BannerRoomsImg} alt="banner-two" style={bgImage} />
      </div>
    </>
  );
}

export default BannerRooms;
