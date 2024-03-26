import { useLoaderData } from "react-router-dom";
import HeadImgteam from "../Components/team/HeadImgteam";

const User = () => {
  const data = useLoaderData();
  console.log(data);
  const { login, avatar_url, url, location, created_at, updated_at } = data;
  return (
    <div>
      <HeadImgteam />
      <div className="flex-detial">
        <img src={avatar_url} alt="image" />
        <div className="info">
          <h2>Name: {login}</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};
export const LoadOneUser = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://api.github.com/users/" + id);
  return res.json();
};

export default User;
