import moto from "./home-images/motoicon.png";
import contact from "./home-images/contacticon.png";
import letdrive from "./home-images/letdrive.png";

const Quickeasy = () => {
  return (
    <div className="quickeasy-container">
      <div className="quickeasy">
        <h4>Plan your trip now</h4>
        <h1>Quick & easy moto rental</h1>
        <div className="flex-quicks">
          <div className="flex-quick">
            <img src={moto} alt="moto" />
            <h3>select Moto</h3>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect moto to meet your needs
            </p>
          </div>

          <div className="flex-quick">
            <img src={contact} alt="contact" />
            <h3>Contact Operator</h3>
            <p>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="flex-quick">
            <img src={letdrive} alt="let drive" />
            <h3>Let`s Drive</h3>
            <p>
              Whether you`re hitting the open road, we`ve got you covered with
              our wide range of motos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickeasy;
