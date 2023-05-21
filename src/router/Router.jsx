import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../Components/AddCoffee";
import AllCoffee from "../Components/AllCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllCoffee />,
        loader: () =>
          fetch("https://coffee-store-server-five.vercel.app/coffees"),
      },
      {
        path: "/add",
        element: <AddCoffee />,
      },
      {
        path: "/coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-five.vercel.app/coffee/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
