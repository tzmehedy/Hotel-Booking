import axios from "axios";
import { CiEdit } from "react-icons/ci"
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { MdOutlineReviews } from "react-icons/md";

const MyBookingsTable = ({ info, bookedInfo, setBookedInfo }) => {

  const d1 = new Date(info.checkIn)
  const d2 = new Date()

  
 
 
  const handelDelete = () => {
    Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    axios.delete(`http://localhost:5000/deleteMyBookings/${info._id}`)
    .then(data=>{
      if(data.data.deletedCount===1){
        const remainingBookedInfo = bookedInfo.filter(b=>b._id !== info_id)
        setBookedInfo(remainingBookedInfo)
      }
    })
    
  }
});

    
  }
  return (
    <tr>
      <td>
        <h1 className="font-bold text-xl">{info.category}</h1>
      </td>
      <td>{info.email}</td>
      <td>{info.checkIn}</td>
      <td>{info.checkOut}</td>
      <td>{info.noOfRooms}</td>
      <td>{info.totalPrice}</td>
      <td>{info.review}</td>
      <td className="flex text-xl space-x-3">
        <Link title="Edit" to={`/updateBookings/${info?._id}`}>
          <CiEdit></CiEdit>
        </Link>
        <button
          title="Cancel"
          disabled={d1.getDate() - 1 === d2.getDate()}
          onClick={handelDelete}
        >
          <MdCancel></MdCancel>
        </button>
        <Link title="Give Review" to={`/review/${info._id}`}>
          <button disabled={info.review === "yes"}>
            <MdOutlineReviews></MdOutlineReviews>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyBookingsTable;
