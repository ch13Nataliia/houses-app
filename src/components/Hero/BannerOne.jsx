import BannerImg from '../../assets/images/big-ban.jpg';
function BannerOne() {
  const bgStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',

  };
  return (
<div style={bgStyle}></div>
  );
}

export default BannerOne;
