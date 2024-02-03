import { useState, useEffect } from "react";
import AllCollection from "./AllCollection";

const AllJewelry = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const initialItemsToShow = 8;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://fancy-finery-server-rocky.vercel.app/jewelryAll"
        );
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredData = category
    ? data.filter((item) => item.category === category)
    : data;

  const handleShowAll = () => {
    setShowAll(true);
    setItemsToShow(filteredData.length);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setItemsToShow(initialItemsToShow);
  };

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-gray-800 underline decoration-wavy decoration-green-400 text-center mb-3 dark:text-white pt-4">All Jewelry Collection</h1>
      <div className="mb-6 mt-10">
        <label className="text-lg mr-1 dark:text-white" htmlFor="category-select">Select a category: </label>
        <select
          id="category-select"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">All</option>
          <option value="Rings">Rings</option>
          <option value="Earrings">Earrings</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Necklaces">Necklaces</option>
        </select>
      </div>
      <div>
        {loading ? (
          <p className="text-center text-3xl font-bold text-red-400">
            Loading...
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredData.slice(0, showAll ? filteredData.length : itemsToShow).map((item) => (
              <AllCollection key={item._id} item={item}></AllCollection>
            ))}
          </div>
        )}

        {!showAll && !loading && filteredData.length > initialItemsToShow && (
          <button
            className="mt-4 bg-blue-500 text-white p-2 rounded-md"
            onClick={handleShowAll}
          >
            Show All
          </button>
        )}

        {showAll && !loading && (
          <button
            className="mt-4 bg-red-500 text-white p-2 rounded-md"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default AllJewelry;
