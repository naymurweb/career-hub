import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeturedJobs from "../FeturedJobs/FeturedJobs";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner/>
            <Category/>
            <FeturedJobs/>
            
            
        </div>
    );
};

export default Home;