import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Home } from "./Pages/Home/Home";
import { Zombie } from "./Pages/Zombie/Zombie";
import { BattleRoyale } from "./Pages/BattleRoyale/BattleRoyale";
import { Racing } from "./Pages/Racing/Racing";
import { Sports } from "./Pages/Sports/Sports";
import { Fighting } from "./Pages/Fighting/Fighting";
import { Details } from "./Pages/Details/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "zombie",
          element: <Zombie />,
        },
        {
          path: "battleRoyale",
          element: <BattleRoyale />,
        },
        {
          path: "racing",
          element: <Racing />,
        },
        {
          path: "sports",
          element: <Sports />,
        },
        {
          path: "fighting",
          element: <Fighting />,
        },
        {
          path: "details/:id",
          element: <Details />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
