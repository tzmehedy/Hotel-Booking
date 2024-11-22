import { useEffect, useState } from "react";
import axios from "axios"
import RoomCard from "./RoomCard";

const Rooms = () => {
    const [rooms, setRooms] = useState([])


    useEffect(() => {
      getData();
    }, [rooms]);

    const getData = async() =>{
        const { data } = await axios.get(`${import.meta.env.VITE_Url}/rooms`)
        setRooms(data)
    }

    
    return (
      <div className="mt-20 p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {rooms.map((room) => (
          <RoomCard room={room}></RoomCard>
        ))}
      </div>
    );
};

export default Rooms;