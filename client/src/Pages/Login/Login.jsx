import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios"

const Login = () => {
  const { user, login, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const handelLoginWithEmailPassword = (e) =>{
    e.preventDefault()

    const form = e.target 

    const email = form.email.value 
    const password = form.password.value

  

    login(email, password)
    .then(result=>{
      console.log(result)
      axios.post("http://localhost:5000/jwt",{email:result?.user?.email}, {withCredentials:true})
      .then(data=>console.log(data))
      toast.success("login successfully")
      navigate(location.state? location.state : "/")
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }
 const handelLoginWithGoogle = () =>{

  loginWithGoogle()
  .then(result=>{
    toast.success("Login SuccessFully")
    navigate(location.state ? location.state : "/");
  })
  .catch(error=>{
    toast.error(error.message)
  })



 }

  return (
    <div className="mt-20">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#f99810f6] font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelLoginWithEmailPassword} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button  className="btn bg-[#f99810f6] text-white font-bold">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center">
              <p>Or,</p>
            </div>
            <div className="flex justify-center items-center space-x-3 mb-2">
              <p>Login With </p>
              <button onClick={handelLoginWithGoogle}>
                <FcGoogle className="text-2xl"></FcGoogle>
              </button>
            </div>
            <div className="mb-10 p-2">
              <p>
                You are not register!!! Please{" "}
                <Link to={"/register"} className="underline text-[#f99810f6]">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
