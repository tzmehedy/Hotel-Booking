import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Review = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const d = new Date()
    const params = useParams()
    const handelReview = (e) =>{
        e.preventDefault()
        const form = e.target 
        const photoUrl = user.photoURL
        const name = form.name.value 
        const email = form.email.value 
        const timeStamp = form.timeStamp.value
        const rating = form.rating.value
        if (parseInt(rating) < 1 || parseInt(rating) > 5) {
          toast.error("The rating will be between 1 & 5");
          return;
        } 
        const comments = form.comments.value
        const bookedRoomId = params.id 

        

        const reviewInfo = {
          name,
          email,
          timeStamp,
          rating,
          comments,
          bookedRoomId,
          photoUrl,
        };
        
        axios.post(
          "http://localhost:5000/allReview",
          reviewInfo
        )
        .then(data=>{
            if(data.data.insertedId){
                toast.success("Your review is successfully added")
                axios.patch(
                  `http://localhost:5000/updateReviewStatus/${bookedRoomId}`
                )
                .then(data=>{
                    if (data.data.modifiedCount===1) {
                      navigate("/myBookings");
                    }
                })
                
            }
        })

    }
    return (
      <div className="mt-20 bg-gray-100 p-20">
        <form onSubmit={handelReview} className="space-y-4">
          <div className="flex flex-col md:flex-row justify-center md:space-x-3">
            <div className="md:w-1/2">
              <label className="font-bold" htmlFor="Name">
                Name
              </label>{" "}
              <br />
              <input
                disabled
                className="px-3 py-2 border-2 w-full"
                type="text"
                defaultValue={user?.displayName}
                name="name"
                id=""
              />
            </div>
            <div className="md:w-1/2">
              <label className="font-bold" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                className="px-3 py-2 border-2 w-full"
                type="email"
                defaultValue={user?.email}
                name="email"
                id=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:space-x-3">
            <div className="md:w-1/2">
              <label className="font-bold" htmlFor="timeStamp">
                Time Stamp
              </label>{" "}
              <br />
              <input
                disabled
                className="px-3 py-2 border-2 w-full"
                defaultValue={d}
                type="text"
                name="timeStamp"
                id=""
              />
            </div>
            <div className="md:w-1/2">
              <label className="font-bold" htmlFor="rating">
                Rating
              </label>{" "}
              <br />
              <input
                className="px-3 py-2 border-2 w-full"
                type="number"
                name="rating"
                id=""
              />
            </div>
          </div>
          <div className="w-full">
            <label className="font-bold" htmlFor="comments">
              Comments
            </label>{" "}
            <br />
            <textarea
              className="px-3 py-2 border-2 w-full"
              type="text"
              name="comments"
              id=""
            />
          </div>
          <div className="text-center">
            <button
              
              className="btn bg-[#f99810f6] text-white"
            >
              Review
            </button>
          </div>
        </form>
      </div>
    );
};

export default Review;