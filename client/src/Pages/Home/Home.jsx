import Banner from "../../Components/Banner/Banner";
import Accommodations from "./Accommodations";


const Home = () => {
    return (
      <div className="space-y-20 md:space-y-40">
        <Banner></Banner>
        <div className="container mx-auto">
          <Accommodations></Accommodations>
        </div>
      </div>
    );
};

export default Home;