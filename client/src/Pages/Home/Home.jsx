import Banner from "../../Components/Banner/Banner";
import Accommodations from "./Accommodations";
import GetInTouch from "./GetInTouch";


const Home = () => {
    return (
      <div className="space-y-20 md:space-y-28">
        <Banner></Banner>
        <div className="container mx-auto">
          <Accommodations></Accommodations>
        </div>

        <div className="container mx-auto">
          <GetInTouch></GetInTouch>
        </div>
      </div>
    );
};

export default Home;