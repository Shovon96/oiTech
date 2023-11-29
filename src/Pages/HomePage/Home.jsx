
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CarouselSlider from "./CarouselSlider";
import Featured from "./Featured";
import Trending from "./Trending";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>OiTech | Home</title>
            </Helmet>
            <div className="hidden lg:block">
                <CarouselSlider></CarouselSlider>
            </div>
            <div className="block lg:hidden">
                <Banner></Banner>
            </div>
            <Featured></Featured>
            <Trending></Trending>
        </div>
    );
};

export default Home;