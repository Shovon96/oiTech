import axios from "axios";
// x
const axiosPublic = axios.create({
    baseURL: "https://oi-tech-server.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;