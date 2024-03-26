import Home from "./Components/Home";
import Layout from "./Layouts/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./Styles/navbar.css";
import "./Components/About/about.css";
import Context from "./Components/Context";
import About from "./Components/About";
import VehicleModels from "./Components/VehicleModels";
import "./Components/models/vehicle.css";
import Contact from "./Components/Contact";
import TeamLayout from "./Layouts/TeamLayout";
import Team, { Loaderuser } from "./Components/Team";
import User, { LoadOneUser } from "./Layouts/User";
import "./Components/team/team.css";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          element: <Home />,
          path: "home",
        },
        {
          element: <About />,
          path: "about",
        },
        {
          element: <VehicleModels />,
          path: "models",
        },
        {
          element: <Contact/>,
          path: "contact",
        },
        {
          path: "team",
          element: <TeamLayout/>,
          children: [
            {
              index: true,
              element: <Team/>,
              loader: Loaderuser,
            },
            {
              path: ":id",
              element: <User/>,
              loader: LoadOneUser,
            }
          ]
        }
      ],
    },
  ]);

  return (
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  );
};

export default App;
