import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UserRole from "../../Hook/UserRole";
import UseAxios from "../../Hook/UseAxios";

const UpdateProduct = () => {
  const { id } = useParams(); 
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
    multiple_images: "",
    description: "",
    product_code: "",
    added_by: role,
    time: new Date().toISOString(),
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await Axios.get(`/user/product/${id}`);
        if (res.data) {
          setFormData(res.data);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id, Axios]);

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
    console.log("Updated Data:", formData);

    try {
      const res = await Axios.put(`/admin/update-product/${id}`, formData);
      if (res.data) {
        toast.success("Product updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update product.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-4/5 mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Product</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Title", name: "title", type: "text" },
          { label: "Price", name: "price", type: "number" },
          { label: "Total Collection", name: "total_collection", type: "number" },
          { label: "Size", name: "size", type: "text" },
          { label: "Color", name: "color", type: "text" },
          { label: "Discount", name: "discount", type: "number" },
          { label: "Product Code", name: "product_code", type: "text" },
          { label: "Multiple Image URLs (comma-separated)", name: "multiple_images", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>
              {label}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              className="input input-bordered w-full p-3"
              placeholder={`Enter ${label.toLowerCase()}`}
              value={formData[name]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}

        {/* Category Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="input input-bordered w-full p-3"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Love_Box">Love Box</option>
            <option value="Saree">Saree</option>
            <option value="Shawl">Shawl</option>
          </select>
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
            placeholder="Enter description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className={`p-3 rounded-lg w-full ${role === "student" ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white`}
            disabled={role === "student"}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
