import Loader from "@/components/Loader";
import Root from "@/layout/Root";
import AllBooks from "@/pages/AllBooks";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
       },
       {
        path: "/books",
        Component: AllBooks
       },
       {
        path:"/loader",
        Component: Loader
       }
    ],
  },
]);
