import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyBookingsTable from './MyBookingsTable';

const MyBookings = () => {
    const {user} = useContext(AuthContext)
    const [bookedInfo, setBookedInfo] = useState([])

    useEffect(()=>{
        const getBookedInfo = async() =>{
            const { data } = await axios.get(
              `http://localhost:5000/myBookedInfo?email=${user?.email}`
            )
            setBookedInfo(data)
        }
        getBookedInfo()
    },[])


    
    return (
      <div className="mt-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Category</th>
                <th>Email</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>No OF Rooms</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                bookedInfo.map(info=><MyBookingsTable info={info}></MyBookingsTable>)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyBookings;