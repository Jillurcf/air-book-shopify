import Banner from "./Banner";
import DealsOffers from "./DealsOffers";
import Featured from "./Featured";
import PopularAirline from "./PopularAirline";
import Testimonials from "./Testimonials";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <DealsOffers></DealsOffers>
            <PopularAirline></PopularAirline>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;