import Hero from "../Hero";
import ChoseUs from "../ChoseUs/ChoseUs";
import Pricing from "../Pricing/Pricing";
import GetInTouch from "../GetInTouch/GetInTouch";
import Classes from "../Classes/Classes";
import Banner from "../Banner/Banner";
const Home = () => {
  return (
    <div>
      <Hero />
      <ChoseUs/>
      <Pricing/>
      <GetInTouch/>
      <Classes/>
      <Banner/>
    </div>
  );
};

export default Home;
