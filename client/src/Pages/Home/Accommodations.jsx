import img1 from "../../assets/images/HotelBookingimages10.jpg"
import img2 from "../../assets/images/HotelBookingimages21.jpg"

const Accommodations = () => {
    return (
      <div className="flex flex-col md:flex-row md:space-x-5 space-y-10 md:space-y-20 p-2">
        <div className="w-full md:w-1/2 space-y-10">
          <p className="text-[#f99810f6] font-bold">Accommodations</p>
          <h1 className="font-bold text-2xl md:text-4xl">
            Welcome Our Hotels <br />
            And Resorts
          </h1>
          <p className="text-justify">
            Savvy travelers are looking for more than just the next destination
            on the map. They are looking for a memorable experience and to make
            new friends along the way.
          </p>
          <button className="btn bg-[#f99810f6] text-white font-bold">Read More</button>
        </div>
        <div className="w-full md:w-1/2 relative">
            <img className="w-2/3" src={img1} alt="" />
            <img className="absolute w-1/2 h-2/3 right-2 md:right-10 md:-top-20 -top-8" src={img2} alt="" />
        
        </div>
      </div>
    );
};

export default Accommodations;