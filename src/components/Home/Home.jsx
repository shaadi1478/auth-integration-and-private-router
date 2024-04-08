import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Auth | Home</title>
            </Helmet>
            <h2>This is home section</h2>
        </div>
    );
};

export default Home;