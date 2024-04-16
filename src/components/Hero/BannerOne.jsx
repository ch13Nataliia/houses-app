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
      <div className="">
        <div
          className="min-h-[400px] sm:min-h-[450px] justify-center items-center opacity-50"
          style={bgImage}
        >
          <h1 className="text-5xl z-40 text-orange-800 font-semibold uppercase text-center items-center justify-center">
            About Us{' '}
          </h1>
          <p className="text-3xl text-orange-800 font-semibold uppercase text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
            nulla error natus optio quibusdam vel libero aut quasi eaque,
            voluptate alias sapiente mollitia beatae vitae nihil porro magnam!
            Provident, ullam.
          </p>
        </div>
      </div>
    </>
  );
}

export default BannerOne;
