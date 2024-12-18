import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"
import { MdLogin } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";



const NavBar = () => {
    const [scrollClass, setScrollClass] = useState();
    const { user, logout } = useContext(AuthContext);

    const changeNavbarStyle = () => {
      if (window.scrollY > 10) {
        setScrollClass(true);
      } else {
        setScrollClass(false);
      }
    };
    useEffect(() => {
      window.addEventListener("scroll", changeNavbarStyle)
    }, []);

    const navLink = (
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/rooms"}>Rooms</NavLink>
        </li>
        {
          user ? <li>
          <NavLink to={"/myBookings"}>My Bookings</NavLink>
        </li> : ""
        }
      </>
    );

    const handelLogout = ()=>{
      logout()
      .then(result=>{
        toast.success("Logout Successfully")
      })
      .catch(error=>{
        toast.error(error.message)
      })

    }
    return (
      <div
        className={`navbar z-50 fixed top-0 transition-all duration-10 shadow-lg ${
          scrollClass ? "bg-[#0E1317]" : ""
        }`}
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#AD8941]"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"} className="text-[#f99810f6] text-xl">
            <img className="w-16 md:w-36 h-7 md:h-12" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#f99810f6] font-bold">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link to={"/rooms"} className="btn bg-[#f99810f6] font-bold text-white border-none ">
            Book Now
          </Link>
          {user ? (
            <>
              <img
                title={user.displayName}
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <Link
                onClick={handelLogout}
                className=" text-3xl md:text-5xl text-[#f99810f6]"
              >
                <CiLogout></CiLogout>
              </Link>
            </>
          ) : (
            <Link
              to={"/login"}
              className=" text-3xl md:text-5xl text-[#f99810f6]"
            >
              <MdLogin></MdLogin>
            </Link>
          )}
        </div>
      </div>
    );
};

export default NavBar;