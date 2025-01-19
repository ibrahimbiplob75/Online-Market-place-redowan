import React, { useState } from "react";
import UseAxios from "../Hook/UseAxios";
import { toast } from "react-toastify";
import UserRole from "../Hook/UserRole";

const AddMagazine = () => {
  const [role] = UserRole();
  const Axios = UseAxios();

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    added_by: role,
    time: new Date().toISOString(),
  });

  const handleSubmitClick = () => {
    if (role === "student") {
      toast.error("Only moderators can submit.");
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Insert data into the database
    try {
      const res = await Axios.post(`/admin/create-magazine`, formData);
      if (res.data) {
        toast.success("New magazine added successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add magazine.");
    }
  };

  return (
    <div className="w-4/5 mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Magazine</h2>
      <form onSubmit={handleSubmit}>
        {/* Magazine Title */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="title"
          >
            Magazine Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input input-bordered w-full p-3"
            placeholder="Enter magazine title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="input input-bordered w-full p-3"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>

       

        {/* Price */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="input input-bordered w-full p-3"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>

         {/* Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="input input-bordered w-full p-3 h-24"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div onMouseEnter={() => handleSubmitClick()} className="text-center">
          <button
            type="submit"
            className={`p-3 rounded-lg w-full ${
              role === "student"
                ? "bg-gray-400"
                : "bg-green-500 hover:bg-green-600"
            } text-white`}
            disabled={role === "student"}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMagazine;
