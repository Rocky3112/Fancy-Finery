import { Link } from "react-router-dom";

const AllCollection = ({ item }) => {
  const { _id, jewelryName, photo, price, category } = item;
  console.log(_id);

  let linkTo = "";

  if (category === "Rings") {
    linkTo = `/ring-collection/${_id}`;
  } else if (category === "Bracelets") {
    linkTo = `/bracelets-collection/${_id}`;
  } else if (category === "Necklaces") {
    linkTo = `/necklace-collection/${_id}`;
  } else {
    linkTo = `/earring-collection/${_id}`;
  }

  return (
    <Link
      to={linkTo}
      className="bg-white p-4 rounded-md shadow-2xl hover:bg-gray-300 mb-4"
    >
      <img className="w-48 rounded-xl h-36 mx-auto mb-2" src={photo} alt="" />
      <h3 className="text-center text-lg font-medium text-gray-800 mb-3">
        {jewelryName}
      </h3>
      <h5 className="text-center text-yellow-400 text-lg font-medium">
        Price: ${price}
      </h5>
    </Link>
  );
};

export default AllCollection;
