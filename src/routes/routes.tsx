import Root from "@/layout/Root";
import AddBook from "@/pages/AddBook";
import AllBooks from "@/pages/AllBooks";
import BorrowSummary from "@/pages/BorrowSummary";
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
        path:"/create-book",
        Component: AddBook
       },
       {
        path:"/borrow-summary",
        Component: BorrowSummary
       }
    ],
  },
]);
