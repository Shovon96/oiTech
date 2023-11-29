import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div className="flex justify-center items-center min-h-[66vh]">
            <h1 className="text-xl text-[#eab308]">Loding....</h1>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoutes;