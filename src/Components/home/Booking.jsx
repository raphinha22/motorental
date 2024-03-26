import { Calendar, MapPin, Search } from "lucide-react";

const Booking = () => {
  return (
    <div className="booking">
      <h3>Book a Moto</h3>
      <div className="grid-booking">
        <div className="text-title">
          <h4>
            🏍️ Select Your Moto Type <span>*</span>
          </h4>
          <select name="motos" id="motos">
            <option value="standard">Select your moto type</option>
            <option value="offroad">Offroad</option>
            <option value="scooter">Scooter</option>
            <option value="sportbike">Sportbike</option>
          </select>
        </div>

        <div className="text-title">
          <div className="title">
            <MapPin />
            <h4>
              Select pick up location<span>*</span>
            </h4>
          </div>
          <select name="motos" id="motos">
            <option value="standard">Select pick up location</option>
            <option value="terktla">Terk Tla</option>
            <option value="rueseikev">Ruesei Kev</option>
            <option value="kombol">Kombol</option>
            <option value="sensok">Sen Sok</option>
          </select>
        </div>

        <div className="text-title">
          <div className="title">
            <MapPin />
            <h4>
              Select drop off location <span>*</span>
            </h4>
          </div>
          <select name="motos" id="motos">
            <option value="standard">Select drop of location</option>
            <option value="terktla">Terk Tla</option>
            <option value="rueseikev">Ruesei Kev</option>
            <option value="kombol">Kombol</option>
            <option value="sensok">Sen Sok</option>
          </select>
        </div>

        <div className="text-title">
          <div className="title">
            <Calendar />
            <h4>
              pick up <span>*</span>
            </h4>
          </div>
          <input type="date" />
        </div>

        <div className="text-title">
          <div className="title">
            <Calendar />
            <h4>
              drop of <span>*</span>
            </h4>
          </div>
          <input type="date" />
        </div>

        <div className="text-title search">
          <div className="title">
            <Search />
            <h4>
              Search <span>*</span>
            </h4>
          </div>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
