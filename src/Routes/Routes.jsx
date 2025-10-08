import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/Books/Bookdetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            index:true,
            loader:()=>fetch('book.json'),
            path:"/",
            Component:Home
        },{
          path:'/about',
          Component:About
        },{
          path:'/bookdetails/:id',
          loader:()=>fetch('book.json'),
          Component:BookDetails
        }
    ]
  },
])