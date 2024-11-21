import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({room}) => {
    
    return (
      <div>
        <div className="card card-compact bg-base-100 max-w-96 h-96 shadow-xl">
          <figure>
            <img src={room.roomImages} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{room.category}</h2>
            <p>{room.roomDescription.substring(0, 70)}...</p>
            <p className="font-bold">Price: ${room.pricePerNight} /per-night</p>
            <p className="text-[#f99810f6] font-bold">
              Available: {room.availability ? "Yes" : "No"}
            </p>
            <p className="text-[#f99810f6] font-bold">
              Offer:{" "}
              {room.specialOffers
                ? room.specialOffers
                : "No Offer is available at this moment"}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/roomDetails/${room._id}`} className="btn bg-[#f99810f6]">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RoomCard;