import Phonenumber from "./About/Phonenumber";
import Headmodels from "./models/Headmodels";
import Vehicle from "./models/Vehicle";
import data from "./models/data";

const VehicleModels = () => {
  return (
    <div className="VehicleModels">
      <Headmodels />
      <Vehicle product={data} />
      <Phonenumber />
    </div>
  );
};

export default VehicleModels;
