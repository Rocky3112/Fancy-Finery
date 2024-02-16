import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CustomDesign from "../CustomDesign/CustomDesign";
import PerfectCreation from "../PerfectCreation/PerfectCreation";
import TotalOverview from "../TotalOverview/TotalOverview";

const Home = () => {
  return (
    <div className="mb-4">
      <Banner />
      <div className="container mx-auto">
      <Category />
      <PerfectCreation />
      <TotalOverview />
      <CustomDesign />
      </div>
    </div>
  );
};

export default Home;