import { Link } from "react-router-dom";

const EarringAllCollection = ({earring}) => {
    const { _id, jewelryName, photo, price } = earring;
    return (
        <Link
      to={`/earring-collection/${_id}`}
      className="bg-white p-4 rounded-md shadow-2xl hover:bg-gray-300 mb-4"
    >
      <img className="w-24 h-24 mx-auto mb-2" src={photo} alt="" />
      <h3 className="text-center text-lg font-medium text-gray-800 mb-3">
        {jewelryName}
      </h3>
      <h5 className="text-center text-yellow-400 text-lg font-medium">
        Price: ${price}
      </h5>
    </Link>
    );
};

export default EarringAllCollection;