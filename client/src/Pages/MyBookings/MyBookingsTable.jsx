import { CiEdit } from "react-icons/ci"
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const MyBookingsTable = ({ info }) => {
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
      <td className="flex text-xl space-x-3">
        <Link to={`/updateBookings/${info?._id}`}>
           <CiEdit></CiEdit>
        </Link>
        <Link>
           <MdCancel></MdCancel>
        </Link>
      </td>
    </tr>
  );
};

export default MyBookingsTable;
