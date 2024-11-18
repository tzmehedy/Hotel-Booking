import bannerImg from "../../assets/images/HotelBookingimages02.jpg"

const Banner = () => {
    return (
      <div className="bg-gradient-to-b from-black to-gray-500">
        <div
          className="w-full h-screen bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
         
        </div>
      </div>
    );
};

export default Banner;