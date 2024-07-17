import Auth from "../features/auth";
import Home from "../features/home";
import Layouts from "../components/layouts";
import Movie from "../features/movies";
import MovieDetail from "../components/movie-details";
import ProtectedRoutes from "./protected-routes";
import Tvshow from "../features/tv-show";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layouts />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/details/:id",
            element: <MovieDetail />,
          },
          {
            path: "/movie",
            element: <Movie />,
          },
          {
            path: "/tvshow",
            element: <Tvshow />,
          },
          {
            path: "/login",
            element: <Auth />,
          },
        ],
      },
    ],
  },
]);
