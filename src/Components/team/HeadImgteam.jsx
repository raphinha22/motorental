import { Link } from "react-router-dom";

const HeadImgteam = () => {
  return (
    <div className="headimg">
      <div className="image-head"></div>
      <div className="link-about">
        <h1>About</h1>
        <div className="flex-link">
          <Link to={"/home"}>Home</Link>
          <p>/</p>
          <p>Our Team</p>
        </div>
      </div>
    </div>
  );
};

export default HeadImgteam;
