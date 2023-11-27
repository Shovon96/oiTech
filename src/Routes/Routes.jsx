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
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/productsDetails/:id',
                element: <PrivetRoutes><ProductsDetails></ProductsDetails></PrivetRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router