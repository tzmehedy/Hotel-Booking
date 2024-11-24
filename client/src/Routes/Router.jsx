import {createBrowserRouter} from "react-router-dom"
import Root from "../Layout/Root"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import MyBookings from "../Pages/MyBookings/MyBookings"
import PrivateRoute from "./PrivateRoute"
import Rooms from "../Pages/Rooms/Rooms"
import RoomDetails from "../Pages/Rooms/RoomDetails"
import UpdateBookings from "../Pages/MyBookings/UpdateBookings"
import Review from "../Pages/Review/Review"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/roomDetails/:id",
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roomDetails/${params.id}`),
      },
      {
        path: "/updateBookings/:id",
        element: (
          <PrivateRoute>
            <UpdateBookings></UpdateBookings>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateBookings/${params.id}`),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
      },
    ],
  },
]);



export default router