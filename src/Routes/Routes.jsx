import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Products from "../Pages/AllProducts/Products";

const router = createBrowserRouter([
    {
        path: "/home",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/home/products',
                element: <Products></Products>
            }
        ]
    },
]);

export default router