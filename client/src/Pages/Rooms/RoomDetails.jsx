
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img1 from "../../assets/images/icons/clening.png"
import img2 from "../../assets/images/icons/breakfast.png"
import img3 from "../../assets/images/icons/carparking.png"
import img4 from "../../assets/images/icons/gym.png"
import img5 from "../../assets/images/icons/key.png"
import img6 from "../../assets/images/icons/pickup.png"
import img7 from "../../assets/images/icons/smimmingpool.png"
import img8 from "../../assets/images/icons/spa.png"
import img9 from "../../assets/images/icons/wifi.png"


const RoomDetails = () => {
    const roomDetailsInfo = useLoaderData()

    return (
      <div className="mt-20 flex p-3 space-x-3">
        <div className="w-2/3 bg-gray-100 ">
        
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