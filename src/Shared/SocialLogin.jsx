import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(() => {
                        toast.success("Login Successfully");
                        navigate(from, { replace: true })
                    })
            })
    }

    return (
        <div>
            <div className="flex justify-evenly">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-sm text-lg"><FcGoogle className="text-red-500"></FcGoogle> google</button>
                <button className="btn btn-outline btn-sm text-lg"><FaGithub></FaGithub> github</button>
            </div>
        </div>
    );
};

export default SocialLogin;