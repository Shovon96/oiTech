import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className="flex justify-center items-center min-h-[100vh]">
        <h1 className="text-xl text-[#eab308]">Loding....</h1>
    </div>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to='/home' state={{from: location}} replace></Navigate>
    
};

export default AdminRoute;