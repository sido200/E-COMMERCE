import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Panier from "../Pages/Panier/Panier";




const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Details/:id", element: <Details /> },
      { path: "/panier", element: <Panier /> },
    ],
  },
 
]);

export default Router;
