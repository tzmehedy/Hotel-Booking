import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateBookings = () => {
  const singleBookedInfo = useLoaderData()
  const navigate = useNavigate()

  const handelBookedUpdate = (e)=>{
    e.preventDefault()
    const form = e.target 
    const checkIn = form.checkIn.value 
    const checkOut = form.checkOut.value 

    const updateInfo = {checkIn, checkOut}

    axios.patch(`http://localhost:5000/updateDate/${singleBookedInfo._id}`, updateInfo)
    .then(data=>{
        if(data.data.modifiedCount){
            toast.success("Update Successfully")
            navigate("/myBookings")
        }
    })

    
  }
  return (
    <div className="mt-20 bg-gray-100 p-20">
      <form onSubmit={handelBookedUpdate} className="space-y-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-3">
          <div className="md:w-1/2">
            <label className="font-bold" htmlFor="category">
              category
            </label>{" "}
            <br />
            <input
              disabled
              className="px-3 py-2 border-2 w-full"
              defaultValue={singleBookedInfo.category}
              type="text"
              name="category"
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <label className="font-bold" htmlFor="email">
              Email
            </label>{" "}
            <br />
            <input
              disabled
              className="px-3 py-2 border-2 w-full"
              defaultValue={singleBookedInfo.email}
              type="text"
              name="email"
              id=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:space-x-3">
          <div className="md:w-1/2">
            <label className="font-bold" htmlFor="checkIn">
              Check In
            </label>{" "}
            <br />
            <input
              className="px-3 py-2 border-2 w-full"
              defaultValue={singleBookedInfo.checkIn}
              type="date"
              name="checkIn"
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <label className="font-bold" htmlFor="checkOut">
              Check Out
            </label>{" "}
            <br />
            <input
              className="px-3 py-2 border- w-full"
              defaultValue={singleBookedInfo.checkOut}
              type="date"
              name="checkOut"
              id=""
            />
          </div>
        </div>
        <div className="text-center">
          <button className="btn bg-[#f99810f6] text-white">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBookings;
