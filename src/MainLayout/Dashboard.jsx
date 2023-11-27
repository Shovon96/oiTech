import { FaHome, FaIdCard, FaList, FaProductHunt, FaUser, FaUserAlt, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    // Admin existing
    // const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div>
            <li><NavLink to='/dashboard/userProfile'><FaUserAlt></FaUserAlt> My Profile</NavLink></li>
            <li><NavLink to='/dashboard/addProducts'><FaIdCard></FaIdCard> Add products</NavLink></li>
            <li><NavLink to='/dashboard/myProducts'><FaList></FaList> My Products</NavLink></li>
            </div>
            {/* dashboard side content */}
            {/* <div className="w-60 min-h-screen bg-blue-600">
                <ul className="menu p-4">

                    Admin dashboard
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'><FaList></FaList> Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUser></FaUser> All Users</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to='/dashboard/userProfile'><FaUserAlt></FaUserAlt> My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/addProducts'><FaIdCard></FaIdCard> Add products</NavLink></li>
                                <li><NavLink to='/dashboard/myProducts'><FaList></FaList> My Products</NavLink></li>

                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userProfile'><FaUserAlt></FaUserAlt> My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/addProducts'><FaIdCard></FaIdCard> Add products</NavLink></li>
                                <li><NavLink to='/dashboard/myProducts'><FaList></FaList> My Products</NavLink></li>

                            </>
                    }

                    <div className="divider"></div>
                    main layout navlink
                    <li><NavLink to='/home'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/products'><FaProductHunt></FaProductHunt> Products</NavLink></li>
                </ul>
            </div> */}
            {/* dashboard contant */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;