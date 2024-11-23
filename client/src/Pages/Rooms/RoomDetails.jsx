
import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import img1 from "../../assets/images/icons/clening.png"
import img2 from "../../assets/images/icons/breakfast.png"
import img3 from "../../assets/images/icons/carparking.png"
import img4 from "../../assets/images/icons/gym.png"
import img5 from "../../assets/images/icons/key.png"
import img6 from "../../assets/images/icons/pickup.png"
import img7 from "../../assets/images/icons/smimmingpool.png"
import img8 from "../../assets/images/icons/spa.png"
import img9 from "../../assets/images/icons/wifi.png"
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';


const RoomDetails = () => {
    const roomDetailsInfo = useLoaderData()
    const [check,setCheck] = useState({})
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const currentNoOfRooms = check.remainingRoom
   

    const getBooksInfo= (e) =>{
      e.preventDefault() 
      const form = e.target 
      const checkIn = form.checkIn.value 
      const checkOut = form.checkOut.value 
      const noOfRooms = form.noOfRooms.value
      const email = user?.email
      const price = roomDetailsInfo.pricePerNight
      const totalPrice = noOfRooms*price
      const remainingRoom = roomDetailsInfo.totalRoom - noOfRooms
      console.log(typeof(remainingRoom))
      const category = roomDetailsInfo.category
      const review = "no"
      const roomId = roomDetailsInfo._id

      const booksInfo = {
        checkIn,
        checkOut,
        noOfRooms,
        email,
        price,
        totalPrice,
        remainingRoom,
        category,
        review,
        roomId,
      };
      setCheck(booksInfo)
    }

    const handelBooks = async() =>{

      const {data} = await axios.post("http://localhost:5000/allBooked", check)

     if(data.insertedId){
      toast.success("Your booked successfully")
      navigate("/rooms")
      axios
        .patch(`http://localhost:5000/updateNoOFRooms/${roomDetailsInfo._id}`, {
          currentNoOfRooms,
        })
        .then((data) => console.log(data));
     }
    }

   

    return (
      <div className="mt-20 flex flex-col-reverse md:flex-row p-3 md:space-x-3">
        <div className="w-full md:w-2/3 bg-gray-100 p-3 space-y-3 mt-5">
          <h1 className="font-bold">Your Price</h1>
          <hr className="" />
          <p>Room Size: {roomDetailsInfo.roomSize}</p>
          <p className="">Price: ${roomDetailsInfo.pricePerNight}/per night</p>
          <p>Total Rooms Available: {roomDetailsInfo.totalRoom}</p>
          <p className="text-[#f99810f6] font-bold">
            Available: {roomDetailsInfo.availability ? "Yes" : "No"}
          </p>
          <p className="text-[#f99810f6] font-bold">
            Offer:{" "}
            {roomDetailsInfo.specialOffers
              ? roomDetailsInfo.specialOffers
              : "No Offer is available at this moment"}
          </p>

          <form onSubmit={getBooksInfo} className="space-y-2">
            <div>
              <label htmlFor="checkIn">Check In</label> <br />
              <input
                className="px-3 py-2 border-2"
                type="date"
                name="checkIn"
                id=""
              />
            </div>
            <div>
              <label htmlFor="checkIn">Check Out</label> <br />
              <input
                className="px-3 py-2 border-2"
                type="date"
                name="checkOut"
                id=""
              />
            </div>
            <div>
              <label htmlFor="checkIn">Number of Rooms</label> <br />
              <input
                className="px-3 py-2 border-2"
                type="number"
                name="noOfRooms"
                id=""
              />
            </div>
            <button
              disabled={roomDetailsInfo.totalRoom === 0}
              className="btn text-white bg-[#f99810f6]"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Book Now
            </button>
          </form>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">
                  Check In: {check?.checkIn}
                </h3>
                <h3 className="font-bold text-lg">
                  Check Out: {check?.checkOut}
                </h3>
              </div>
              <div className="mt-2 flex justify-between">
                <p>Email: {check.email}</p>
                <p className="">No Of Rooms: {check.noOfRooms}</p>
              </div>
              <div>
                <p>Total Price: ${check.totalPrice}</p>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in div, it will close the modal */}
                  <div className="space-x-3">
                    <button className="btn">close</button>
                    <Link onClick={handelBooks} className="btn bg-[#f99810f6]">
                      Book
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>

        <div className="space-y-10">
          <h1 className="font-bold text-5xl">{roomDetailsInfo.category}</h1>
          <p className="text-justify">{roomDetailsInfo.roomDescription}</p>
          <img
            className="max-w-full h-[400px]"
            src={roomDetailsInfo.roomImages}
            alt=""
          />
          <h1 className="text-4xl font-bold">Special check-in instructions</h1>
          <p className="text-justify">
            Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia
            sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque consectetur rhoncus lobortis.
            Curabitur sit amet velit sagittis, pellentesque diam euismod,
            faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a
            fermentum justo semper in. Aliquam egestas metus at nunc aliquam id
            molestie ex ornare. <br /> Aliquam id arcu vel sem pretium porttitor
            non maximus diam. Quisque urna turpis, euismod sed elementum vel,
            pellentesque eu eros. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus musc.
          </p>
          <hr />

          <div>
            <h1 className="text-4xl font-bold mb-5">Amenities</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex justify-center items-center space-x-2 bg-gray-100 py-5 shadow-md">
                <img src={img1} alt="" />
                <p>Room Cleanig</p>
              </div>
              <div className="flex justify-center items-center space-x-2 bg-gray-100 py-5 shadow-md">
                <img src={img2} alt="" />
                <p>Breakfast</p>
              </div>
              <div className="flex justify-center items-center space-x-2 bg-gray-100 py-5 shadow-md">
                <img src={img3} alt="" />
                <p>Car Parking</p>
              </div>
              <div className="flex justify-center items-center space-x-2 bg-gray-100 py-5 shadow-md">
                <img src={img4} alt="" />
                <p>Fitness GYM</p>
              </div>
              <div className="flex justify-center items-center space-x-2 bg-gray-100 py-5 shadow-md">
                <img src={img5} alt="" />
                <p>Digital Key</p>
              </div>
              <div className="flex justify-center items-center space-x-2 bg-gray-100 py-5 shadow-md">
                <img src={img6} alt="" />
                <p>Drop & PickUp</p>
              </div>
              <div className="flex justify-center items-center space-x-2 bg-gray-100 py-5 shadow-md">
                <img src={img7} alt="" />
                <p>Swimming Pool</p>
              </div>
              <div className="flex justify-center items-center space-x-2 bg-gray-100 py-5 shadow-md">
                <img src={img8} alt="" />
                <p>SPA Center</p>
              </div>
              <div className="flex justify-center items-center space-x-2 bg-gray-100 py-5 shadow-md">
                <img src={img9} alt="" />
                <p>Home Wifi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RoomDetails;