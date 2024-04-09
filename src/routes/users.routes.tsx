import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";

export const usersRouter = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>
  },
])