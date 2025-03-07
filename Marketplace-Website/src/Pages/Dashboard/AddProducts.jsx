import React, { useState } from "react";
import { toast } from "react-toastify";
import UserRole from "../../Hook/UserRole";
import UseAxios from "../../Hook/UseAxios";


const AddProducts = () => {
  const [role] = UserRole();
  const Axios = UseAxios();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    total_collection: "",
    size: "",
    color: "",
    discount: "",
    multiple_images: [],
    description: "",
    product_code: "",
    added_by: role,
    time: new Date().toISOString(),
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle multiple image URLs
  const handleMultipleImagesChange = (e) => {
    const images = e.target.value.split(",").map((img) => img.trim());
    setFormData((prevData) => ({
      ...prevData,
      multiple_images: images,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Insert data into the database
    try {
      const res = await Axios.post(`/admin/create-product`, formData);
      if (res.data) {
        toast.success("New product added successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="w-4/5 mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
            Product Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input input-bordered w-full p-3"
            placeholder="Enter product title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="price">
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

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="input input-bordered w-full p-3"
            value={formData?.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Love_Box">Love Box</option>
            <option value="Saree">Saree</option>
            <option value="Shawl">Shawl</option>
          </select>
        </div>
        {/* Total Collection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="total_collection">
            Total Collection
          </label>
          <input
            type="number"
            id="total_collection"
            name="total_collection"
            className="input input-bordered w-full p-3"
            placeholder="Enter total collection"
            value={formData.total_collection}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Size */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="size">
            Size
          </label>
          <input
            type="text"
            id="size"
            name="size"
            className="input input-bordered w-full p-3"
            placeholder="Enter available sizes (e.g., M, L, XL)"
            value={formData.size}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Color */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="color">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            className="input input-bordered w-full p-3"
            placeholder="Enter available colors"
            value={formData.color}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Discount */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="discount">
            Discount (%)
          </label>
          <input
            type="number"
            id="discount"
            name="discount"
            className="input input-bordered w-full p-3"
            placeholder="Enter discount percentage"
            value={formData.discount}
            onChange={handleInputChange}
          />
        </div>

        {/* Multiple Images */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="multiple_images">
            Multiple Image URLs
          </label>
          <input
            type="text"
            id="multiple_images"
            name="multiple_images"
            className="input input-bordered w-full p-3"
            placeholder="Enter image URLs separated by commas"
            value={formData.multiple_images.join(", ")}
            onChange={handleMultipleImagesChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="input input-bordered w-full p-3 h-24"
            placeholder="Enter product description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Product Code */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="product_code">
            Product Code
          </label>
          <input
            type="text"
            id="product_code"
            name="product_code"
            className="input input-bordered w-full p-3"
            placeholder="Enter product code"
            value={formData.product_code}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
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

export default AddProducts;
