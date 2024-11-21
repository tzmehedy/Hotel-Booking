import Banner from "../../Components/Banner/Banner";
import Accommodations from "./Accommodations";
import Feature from "./Feature";
import GetInTouch from "./GetInTouch";


const Home = () => {
    return (
      <div className="space-y-20 md:space-y-28">
        <Banner></Banner>
        <div className="container mx-auto">
          <Accommodations></Accommodations>
        </div>

        <div className="container mx-auto">
          <Feature></Feature>
        </div>

        <div className="container mx-auto">
          <GetInTouch></GetInTouch>
        </div>
      </div>
    );
};

export default Home;