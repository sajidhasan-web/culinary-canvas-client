
import SectionHead from "../../Components/SectionHead/SectionHead";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <div className="my-8 md:my-12">
                <SectionHead 
                    title="Our Top Food"
                    des="Discover our top food section, showcasing a curated selection of our most popular and delicious dishes, from savory starters to indulgent desserts."
                />
            </div>
        </div>
    );
};

export default Home;
