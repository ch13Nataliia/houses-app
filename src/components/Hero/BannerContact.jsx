import BannerImg1 from '../../assets/housesImg/secondHouse1.webp';


function BannerContact() {
  const bgStyle = {
    backgroundImage: `url(${BannerImg1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  };
  return (
    <>
    <div className="min-h-[250px] sm:min-h-250px] justify-center items-center opacity-50">
      <img src={BannerImg1} alt="banner-two" style={bgStyle} />
    </div>
  </>
  )
}

export default BannerContact;
