import { Link, useLoaderData } from "react-router-dom";
import Phonenumberteam from "./team/Phonenumberteam";
import HeadImgteam from "./team/HeadImgteam";

const Team = () => {
  const data = useLoaderData();
  return (
    <div className="team">
      <HeadImgteam />
      <div className="grid-team">
        {data.map((user) => {
          return (
            <Link key={user.id} to={user.id.toString()}>
              <div className="user-box">
                <img src={user.avatar_url} alt="" />
                <h3>{user.login}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      <Phonenumberteam />
    </div>
  );
};
export const Loaderuser = async () => {
  const res = await fetch("https://api.github.com/users");
  return res.json();
};

export default Team;
