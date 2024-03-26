import { Link } from "react-router-dom";

const HeadImgcontact = () => {
  return (
    <div className="headimg">
      <div className="image-head"></div>
      <div className="link-about">
        <h1>About</h1>
        <div className="flex-link">
          <Link to={"/home"}>Home</Link>
          <p>/</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default HeadImgcontact;
