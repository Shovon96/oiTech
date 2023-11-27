import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Mainlayout = () => {
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-center min-h-[100vh]">
            <h1 className="text-xl text-[#eab308]">Loding....</h1>
        </div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;