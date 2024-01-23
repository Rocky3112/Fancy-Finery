import { Link } from "react-router-dom";
import Rings from "../../../assets/Category/Gold-4.png"
import Earrings from "../../../assets/Category/Earring-4.png"
import Bracelets from "../../../assets/Category/Bracelets-1.png"
import Necklaces from "../../../assets/Category/Necklaces-02.png"

const Category = () => {
  return (
    <div className="mt-8 px-4 md:p-0">
      <h1 className="text-3xl font-bold text-gray-800 underline decoration-wavy decoration-green-400 text-center mb-8 dark:text-white">
        Jewelry Collection
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <Link
          to={`/ring-collection`}
          className="bg-white px-4 py-10 rounded-md shadow-2xl hover:bg-gray-300"
        >
          <img className="w-24 h-24 mx-auto mb-2" src={Rings} alt="" />
          <h3 className="text-center text-lg font-medium text-gray-800">
            Rings
          </h3>
        </Link>
        <Link
          to={`/earring-collection`}
          className="bg-white px-4 py-10 rounded-md shadow-2xl hover:bg-gray-300"
        >
          <img className="w-24 h-24 mx-auto mb-2" src={Earrings} alt="" />
          <h3 className="text-center text-lg font-medium text-gray-800">
          Earrings
          </h3>
        </Link>
        <Link
          to={`/bracelets-collection`}
          className="bg-white px-4 py-10 rounded-md shadow-2xl hover:bg-gray-300"
        >
          <img className="w-24 h-24 mx-auto mb-2" src={Bracelets} alt="" />
          <h3 className="text-center text-lg font-medium text-gray-800">
          Bracelets
          </h3>
        </Link>
        <Link
          to={`/necklace-collection`}
          className="bg-white px-4 py-10 rounded-md shadow-2xl hover:bg-gray-300"
        >
          <img className="w-24 h-24 mx-auto mb-2" src={Necklaces} alt="" />
          <h3 className="text-center text-lg font-medium text-gray-800">
          Necklaces
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Category;
