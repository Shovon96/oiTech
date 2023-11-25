
import Banner from "./Banner";
import CarouselSlider from "./CarouselSlider";
import Featured from "./Featured";

const Home = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <CarouselSlider></CarouselSlider>
            </div>
            <div className="block lg:hidden">
                <Banner></Banner>
            </div>
            <Featured></Featured>
        </div>
    );
};

export default Home;