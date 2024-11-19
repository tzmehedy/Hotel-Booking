
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handelRegister = (e) =>{
    e.preventDefault()

    const form = e.target 

    const name = form.name.value 
    const email = form.email.value 
    const password = form.password.value 
    const photo = form.photo.value
    
    console.log(name, email, password, photo)
    
    createUser(email,password)
    .then(result=>console.log(result))
    .then(error=>console.log(error.message))

  }
    return (
      <div className="mt-20">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-[#f99810f6] font-bold">
                Register Now!!
              </h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handelRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo"
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#f99810f6] text-white font-bold">
                    Register
                  </button>
                </div>
              </form>

              <div className="mb-10 p-2">
                <p>
                  Already you have an account? Please{" "}
                  <Link to={"/login"} className="underline text-[#f99810f6]">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;