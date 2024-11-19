import { Outlet } from "react-router-dom";
// import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";


const Root = () => {
    
    return (
      <div>
        {/* Nav Bar */}
        <div className={``}>
          <NavBar></NavBar>
        </div>

        {/* Outlet */}
        <div className="">
          <Outlet></Outlet>
        </div>

        {/* Footer */}
        {/* <div>
          <Footer></Footer>
        </div> */}
      </div>
    );
};

export default Root;