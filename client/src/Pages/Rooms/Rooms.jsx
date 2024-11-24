import { useEffect, useState } from "react";
import axios from "axios"
import RoomCard from "./RoomCard";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [sort,setSort] = useState("")

    console.log(sort)


    useEffect(() => {
      getData();
    }, [rooms,sort]);

    const getData = async() =>{
        const { data } = await axios.get(`${import.meta.env.VITE_Url}/rooms?sort=${sort}`)
        setRooms(data)
    }

    
    return (
      <div className="mt-20">
        <div className="text-center">
          <select onChange={(e)=>setSort(e.target.value)} className="border border-black px-3 py-2" name="sort" value={sort} id="">
            <option value="">Filter By Price</option>
            <option value="asc">Ascending by Price</option>
            <option value="dsc">Descending by Price</option>
          </select>

        </div>
        <div className="mt-10 p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <RoomCard room={room}></RoomCard>
          ))}
        </div>
      </div>
    );
};

export default Rooms;