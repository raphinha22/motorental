import Booking from "./home/Booking";
import Faq from "./home/Faq";
import Konhome from "./home/Konhome";
import Quickeasy from "./home/Quickeasy";

const Home = () => {
  return (
    <div className="home">
      <Konhome />
      <Booking />
      <Quickeasy />
      <Faq />
    </div>
  );
};

export default Home;
