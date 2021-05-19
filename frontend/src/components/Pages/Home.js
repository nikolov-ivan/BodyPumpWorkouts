import Hero from "../Hero";
import ChoseUs from "../ChoseUs/ChoseUs";
import Pricing from "../Pricing/Pricing";
import GetInTouch from "../GetInTouch/GetInTouch";
import Classes from "../Classes/Classes";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Team from "../Team/Team";
const Home = () => {
  return (
    <div>
      <Hero />
      <ChoseUs/>
      <Pricing/>
      <GetInTouch/>
      <Classes/>
      <Banner/>
      <Gallery/>
      <Team/>
    </div>
  );
};

export default Home;
