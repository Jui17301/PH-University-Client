import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  //relative path
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/admin",
    element:<App/>,
    children:adminRoutes
  },
  {
    path:"/faculty",
    element:<App/>,
    children:adminRoutes
  },
  {
    path:"/student",
    element:<App/>,
    children:adminRoutes
  },
  // absolute Path:
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register></Register>
  }
])
export default router