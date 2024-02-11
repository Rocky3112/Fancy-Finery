import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CustomDesign from "../CustomDesign/CustomDesign";
import PerfectCreation from "../PerfectCreation/PerfectCreation";

const Home = () => {
  return (
    <div className="mb-4">
      <Banner />
      <Category />
      <PerfectCreation />
      <CustomDesign />
    </div>
  );
};

export default Home;