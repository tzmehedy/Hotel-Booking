import { useEffect, useState } from "react";
import axios from "axios"
import RoomCard from "./RoomCard";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [sort,setSort] = useState("")
    const [lowPrice, setLowPrice] = useState()
    const [highPrice,setHighPrice] = useState()

    const handelSearch = (e) => {
      e.preventDefault();
      const form = e.target;
      const minimumPrice = form.minimumPrice.value;
      const maximumPrice = form.maximumPrice.value;
      setLowPrice(minimumPrice);
      setHighPrice(maximumPrice);
    };

    useEffect(() => {
      getData();
    }, [rooms, sort, lowPrice, highPrice]);

    const getData = async() =>{
        const { data } = await axios.get(`${import.meta.env.VITE_Url}/rooms?sort=${sort}&&lowPrice=${lowPrice}&&highPrice=${highPrice}`)
        setRooms(data)
    }

    

    console.log(lowPrice, highPrice)

    
    return (
      <div className="mt-20">
        <div className="text-center space-y-3">
          <div>
            <form onSubmit={handelSearch} className="flex justify-center items-center space-x-3">
              <div className="space-x-2">
                <label htmlFor="minimumPrice">Minimum Price:</label>
                <input
                  className="px-3 py-2 border border-black"
                  type="number"
                  name="minimumPrice"
                  id=""
                />
              </div>
              <div className="space-x-2">
                <label htmlFor="maximumPrice">Maximum Price:</label>
                <input
                  className="px-3 py-2 border border-black"
                  type="number"
                  name="maximumPrice"
                  id=""
                />
              </div>
              <div>
                <button className="btn bg-[#f99810f6]">Search</button>
              </div>
            </form>
          </div>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border border-black px-3 py-2"
            name="sort"
            value={sort}
            id=""
          >
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