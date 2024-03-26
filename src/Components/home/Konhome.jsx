import moto from "./home-images/bike5_1.png";
import "../home/home.css";

const Konhome = () => {
  return (
    <div className="konhome">
      <div className="flex-konhome">
        <div className="text-konhome">
          <h5>Plan your trip now</h5>
          <h2>
            Save <span>big</span> with our
          </h2>
          <h2>Moto rental</h2>
          <p>
            Rent the Moto of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="btn-konhome">
            <button className="book-ride">Book Ride ☑</button>
            <button className="learn-more">Learn More 🏃‍♂️‍➡️</button>
          </div>
        </div>
        <div className="image-moto">
          <img src={moto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Konhome;
