import { Link } from "react-router-dom";
import logo from "../Moto-Image/5545574.png";
import "../Styles/navbar.css";
import { Menu, X } from "lucide-react";
import { Contexts } from "./Context";

const navbar = [
  {
    id: 1,
    path: "home",
    text: "Home",
  },
  {
    id: 2,
    path: "about",
    text: "About",
  },
  {
    id: 3,
    path: "models",
    text: "Vehicle Models",
  },
  {
    id: 4,
    path: "team",
    text: "Our Team",
  },
  {
    id: 5,
    path: "contact",
    text: "Contact",
  },
];

const Navbar = () => {
  const { Nav, HandleNavbar, HandleNavbartrue } = Contexts();

  return (
    <>
      <nav className="Navbar">
        <Link to={"home"} className="logo-link">
          <div className="logo">
            <img src={logo} alt="moto" />
            <div className="logo-text">
              <h3>MOTO</h3>
              <h5>Rental</h5>
            </div>
          </div>
        </Link>
        <ul>
          {navbar.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="icon-menu" onClick={HandleNavbar}>
          {Nav ? <X /> : <Menu />}
        </div>
        <div className="login">
          <button>Sign In</button>
          <button>Register</button>
        </div>
      </nav>
      {Nav && (
        <ul className="respon">
          {navbar.map((item) => {
            return (
              <li key={item.id} onClick={HandleNavbartrue}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Navbar;
