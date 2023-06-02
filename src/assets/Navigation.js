import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/Contact";
import Contact from "../components/Login";
import Error from "../components/Error";
import Login from "../components/Login";
import Products from "../components/Products";



import Subscription from "../components/Subscription";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/subscription",
    element: <Subscription />,
    errorElement: <Error />,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <Error />,
  },
]);
