import Banner from "./Banner";
import DealsOffers from "./DealsOffers";
import Featured from "./Featured";
import PopularAirline from "./PopularAirline";
import Subscription from "./Subscription";
import Testimonials from "./Testimonials";
import TravelVlog from "./TravelVlog";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <DealsOffers></DealsOffers>
            <PopularAirline></PopularAirline>
            <Testimonials></Testimonials>
            <TravelVlog></TravelVlog>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;