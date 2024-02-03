import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const SingleNecklace = () => {
  const necklace = useLoaderData();
  const { _id, jewelryName, size, color, price, description, photo, category } =
    necklace;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Add To Cart:
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const addItem = {
        jewelryName,
        photo,
        size,
        color,
        description,
        category,
        email: user.email,
      };

      fetch("https://fancy-finery-server-rocky.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Necklace added on the Cart List",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to added the Jewelry",
        icon: "Warning",
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    data.productId = _id;

    fetch("https://fancy-finery-server-rocky.vercel.app/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });
  };

  return (
    <div className="mt-20 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img className="bg-white w-full h-full" src={photo} alt="" />
        <div className="bg-white p-4 flex flex-col gap-3">
          <h3 className="text-3xl md:text-4xl font-medium text-gray-800">
            {jewelryName}
          </h3>
          <p className="text-2xl">Price: ${price}</p>
          <p className="text-2xl">Category: {category}</p>
          <p className="text-2xl">Size: {size}</p>
          <p className="text-2xl">Color: {color}</p>
          <h6 className="text-xl font-medium -mb-2">Details Necklace Info:</h6>
          <p className="text-xl">{description}</p>
          <button
            onClick={() => handleAddToCart(necklace)}
            className="text-white bg-blue-500 hover:bg-blue-600 text-lg font-medium w-full py-2 rounded-md mt-4"
          >
            Add to Cart
          </button>
          {/* React Hook Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              className="text-lg font-medium text-gray-800 mr-2"
              htmlFor="name"
            >
              Your name:
            </label>
            <input
              className="border-2 p-2 mb-2"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <div>
                <p className="mb-1 text-red-600">Name is required</p>
                <br />
              </div>
            )}
            <label
              className="text-lg font-medium text-gray-800 mr-1"
              htmlFor="currency"
            >
              Currency:
            </label>
            <select className="border-2 p-2 mb-2" {...register("currency")}>
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
            </select>
            <br />
            <label
              className="text-lg font-medium text-gray-800 mr-2"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              className="border-2 p-2 mb-2"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            <br />
            {errors.phone && (
              <div>
                <p className="mb-1 text-red-600">Phone Number is required</p>
                <br />
              </div>
            )}
            <input
              className="bg-black hover:gray-800 text-white px-8 py-2 rounded-md font-semibold cursor-pointer"
              type="submit"
              value="pay"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleNecklace;
