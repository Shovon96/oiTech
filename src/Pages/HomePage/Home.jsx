
import Banner from "./Banner";
import CarouselSlider from "./CarouselSlider";

const Home = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <CarouselSlider></CarouselSlider>
            </div>
            <div className="block lg:hidden">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;