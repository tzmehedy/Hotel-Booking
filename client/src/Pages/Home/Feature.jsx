import img1 from "../../assets/images/HotelBookingimages14.jpg"
import img2 from "../../assets/images/HotelBookingimages15.jpg"
import img3 from "../../assets/images/HotelBookingimages16.jpg"
import img4 from "../../assets/images/HotelBookingimages17.jpg"


const Feature = () => {
    return (
      <div className="flex gap-5">
        <div className="w-full md:w-1/2 space-y-2">
          <h1 className="text-3xl font-bold">Our's Feature</h1>
          <p className="text-justify">
            Maecenas tincidunt hendrerit odio sed consectetur. Duis porta purus
            sapien, eget pretium augue consectetur ut. Nunc nibh augue, pretium
            quis imperdiet pellentesque, molestie eget nisi. Sed rutrum sit amet
            eros ac egestas. Maecenas tincidunt dolor in massa iaculis, vitae
            dignissim sem finibus. Pellentesque elementum vel arcu sit amet
            rhoncus.
          </p>
          <p className="bg-gray-100  p-7 border border-l-2 border-l-[#f99810f6] text-justify">
            Aenean imperdiet finibus sodales. Sed non ex nisl. Maecenas ut
            dictum neque, at euismod felis. Etiam rhoncus neque vitae efficitur
            mollis. Vestibulum sed pulvinar magna suspendisse
          </p>
          <p className="text-justify">
            Vestibulum eget tellus rhoncus, dictum massa a, mattis massa. Cras
            in leo semper, ultricies ligula nec, ornare tellus. Suspendisse quam
            risus, semper et ultricies a, commodo eu tortor. Phasellus elementum
            tincidunt varius. Nam facilisis, ante eget gravida vestibulum, ante
            nisi feugiat nulla, in dapibus neque turpis et dolor. Vestibulum in
            urna urna. Nulla at eleifend lorem. Praesent et ex sed metus egestas
            feugiat. Donec velit libero, feugiat ac dictum vel, dignissim id
            ante. Praesent hendrerit posuere condimentum.
          </p>
          <button className="btn bg-[#f99810f6] text-white font-bold">Book now</button>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    );
};

export default Feature;