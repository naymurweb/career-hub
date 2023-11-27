import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeturedJobs from "../FeturedJobs/FeturedJobs";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner/>
            <Category/>
            <FeturedJobs/>
            <HelmetProvider>
                <Helmet>
                    <title>home</title>
                </Helmet>
            </HelmetProvider>
            
            
        </div>
    );
};

export default Home;