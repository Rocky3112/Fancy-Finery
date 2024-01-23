import { Link } from "react-router-dom";
import ring1 from "../../../assets/Category/Gold-1.png";

const CustomDesign = () => {
  return (
    <div className="mt-16 px-4 md:p-0">
      <h1 className="text-3xl font-bold text-gray-800 underline decoration-wavy decoration-green-400 text-center mb-4 dark:text-white">
        Custom Design
      </h1>
      <div className="flex flex-col md:flex-row gap-4 justify-evenly items-center mt-8">
        <div>
          <h3 className="text-4xl md:text-6xlxl font-bold text-gray-800 mb-3 dark:text-white">
            Design Your Dream <br /> Rings yourself
          </h3>
          <p className="text-gray-600 mb-3 dark:text-white">
            Create your unique wedding rings with our 3D <br /> configurator. At
            Trauringspezlisten. de your wishes become reality{" "}
          </p>
          <button className="text-yellow-500 border-2 border-yellow-500 rounded-3xl px-3 py-2">
            <Link to={`/ring-collection`}>CONFIGURE NOW</Link>
          </button>
        </div>
        <img className="h-72 w-60" src={ring1} alt="" />
      </div>
    </div>
  );
};

export default CustomDesign;
