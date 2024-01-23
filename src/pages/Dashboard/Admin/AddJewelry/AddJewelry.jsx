import Swal from "sweetalert2";

const AddJewelry = () => {
  const image_hosting_URL = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_Image_Upload_Token
  }`;

  const handleAddJewelry = (event) => {
    event.preventDefault();
    const form = event.target;
    const jewelryName = form.jewelryName.value;
    const price = form.price.value;
    const color = form.color.value;
    const size = form.size.value;
    const category = form.category.value;
    const image = form.photo.files[0];
    const description = form.description.value;
    

    const formData = new FormData();
    formData.append("image", image);

    fetch(image_hosting_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;

          const newJewelry = {
            jewelryName,
            price,
            color,
            size,
            category,
            photo: imgURL,
            description,
          };

          // send data to the server
          fetch("http://localhost:5000/jewelry", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newJewelry),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "New Jewelry added successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
            });
        }
      });
  };
  return (
    <div className="">
      <h3 className="text-center mt-10 text-3xl font-bold text-blue-gray-800 underline decoration-wavy decoration-green-400">
        Add a Jewelry
      </h3>
      <div className="w-full md:w-[500px] mx-auto px-2 bg-gray-100 mt-8">
        <form
          className="border-2 border-blue-gray-400 rounded-md p-8 mb-8"
          onSubmit={handleAddJewelry}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="jewelryName">
                Jewelry Name
              </label>
              <input
                className="p-3 rounded-lg bg-white mb-8"
                type="text"
                name="jewelryName"
                id=""
                placeholder="Jewelry Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="price">
                Price
              </label>
              <input
                className="p-3 rounded-lg bg-white mb-8"
                type="text"
                name="price"
                id=""
                placeholder="Price"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="color">
                Color
              </label>
              <input
                className="p-3 rounded-lg bg-white mb-8"
                type="text"
                name="color"
                id=""
                placeholder="Color"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="size">
                Size
              </label>
              <input
                className="p-3 rounded-lg bg-white mb-8"
                type="text"
                name="size"
                id=""
                placeholder="Size"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="category">
                Category
              </label>
              <select
                className="py-3 border-2 rounded-lg"
                name="category"
                id=""
              >
                <option value="Rings">Rings</option>
                <option value="Earrings">Earrings</option>
                <option value="Necklaces">Necklaces</option>
                <option value="Bracelets">Bracelets</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="photo">
                Photo
              </label>
              <input
                className="p-3 rounded-lg bg-white mb-8"
                type="file"
                name="photo"
                id=""
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="p-5 rounded-lg bg-white mb-8"
              type="description"
              name="description"
              id=""
              placeholder="Enter details..."
            />
          </div>
          <input
            className="w-full py-3 hover:bg-yellow-500 bg-yellow-700 text-white font-medium text-lg rounded-lg cursor-pointer"
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJewelry;
