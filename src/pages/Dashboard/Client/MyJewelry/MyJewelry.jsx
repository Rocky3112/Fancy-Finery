import useCart from "../../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TABLE_HEAD = ["#", "Name", "Photo", "Details", "Action"];

const MyJewelry = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fancy-finery-server-rocky.vercel.app/cart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted", "Your file has been deleted", "success");
            }
          });
      }
    });
  };

  return (
    <div className="mt-10">
      <h3 className="mb-8 text-3xl font-semibold text-center underline decoration-wavy decoration-green-400">
        Total add Jewelry: {cart.length}
      </h3>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            const isLast = index === cart.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={item._id}>
                <td className={classes}>{index + 1}</td>
                <td className={classes}>{item.jewelryName}</td>
                <td>
                  <img className="h-16 w-16" src={item.photo} alt="" />
                </td>
                <td>
                  <button className="btn btn-ghost bg-blue-400 hover:bg-blue-600 text-white px-3 py-1 rounded-sm">
                  Details
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-white bg-red-600 btn btn-ghost"
                  >
                    <FaTrashAlt></FaTrashAlt>{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyJewelry;
