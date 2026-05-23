import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <h1>Error Page</h1>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/auth",
    element: <h1>Login</h1>,
  },
]);

export default router;