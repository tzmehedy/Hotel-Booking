import bannerImg from "../../assets/images/HotelBookingimages02.jpg"

import { IoPlayCircleOutline } from "react-icons/io5";

import { IoIosClose } from "react-icons/io";



const Banner = () => {
    return (
      <div className="bg-gradient-to-br from-black to-gray-500">
        <div
          className="w-full h-screen bg-cover mix-blend-overlay flex justify-center items-center relative"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="text-center text-[#f99810f6] font-bold text-2xl md:text-7xl p-10">
            <h1 className="">The Best Hotel</h1>
            <h1 className="">Deals in the World</h1>
          </div>

          <div className="rounded-full w-10 md:w-20 h-10 md:h-20 border border-white  flex justify-center items-center absolute top-2/3 right-[50px]  md:right-[150px]">
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className=" text-2xl md:text-5xl text-[#f99810f6] "
            >
              <IoPlayCircleOutline></IoPlayCircleOutline>
            </button>
          </div>

          <dialog
            id="my_modal_5"
            className="modal modal-middle"
          >
            <div className="modal-box bg-gray-800">
              <div className="w-full">
                <iframe
                  width=""
                  height=""
                  src="https://www.youtube.com/embed/hNN9Q3GuWEM?si=bcLhxcvD6Bc3HG9q"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="modal-action absolute right-[2px] md:right-[413px] top-[70px] md:top-[156px]">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className=" text-5xl text-[#f99810f6]">
                  <IoIosClose />
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    );
};

export default Banner;