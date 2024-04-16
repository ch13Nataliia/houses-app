import BannerImg from '../../assets/images/big-ban.jpg';
function BannerOne() {
  const bgImage = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPOsition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  };
  return (
    <>
      <div
        className="min-h-[500px] sm:min-h-[650px] justify-center items-center opacity-50"
        style={bgImage}
      ></div>
    </>
  );
}

export default BannerOne;
