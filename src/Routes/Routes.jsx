import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Products from "../Pages/AllProducts/Products";
import ProductsDetails from "../Shared/ProductsDetails";
import Login from "../Pages/Login-Registetion/Login";
import Register from "../Pages/Login-Registetion/Registetion";
import PrivetRoutes from "./PrivetRoutes";

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
            },
            {
                path: '/home/productsDetails/:id',
                element: <PrivetRoutes><ProductsDetails></ProductsDetails></PrivetRoutes>
            },
            {
                path: '/home/login',
                element: <Login></Login>
            },
            {
                path: '/home/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router