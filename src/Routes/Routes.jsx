import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Products from "../Pages/AllProducts/Products";
import ProductsDetails from "../Shared/ProductsDetails";
import Login from "../Pages/Login-Registetion/Login";
import Register from "../Pages/Login-Registetion/Registetion";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../MainLayout/Dashboard";
import UserProfile from "../Pages/Dashboard/UserProfile";
import AddProducts from "../Pages/Dashboard/AddProducts";
import MyProducts from "../Pages/Dashboard/MyProducts";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
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


    // Dashboard path and elements
    {
        path: '/dashboard',
        element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
        children: [
            {
                path: '/dashboard/userProfile',
                element: <PrivetRoutes><UserProfile></UserProfile></PrivetRoutes>
            },
            {
                path: '/dashboard/addProducts',
                element: <PrivetRoutes><AddProducts></AddProducts></PrivetRoutes>
            },
            {
                path: '/dashboard/myProducts',
                element: <PrivetRoutes><MyProducts></MyProducts></PrivetRoutes>
            },
            {
                path: '/dashboard/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>
            },
            {
                path: '/dashboard/manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]

    }
]);

export default router