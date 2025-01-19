import React, { useState, useEffect } from "react";
import UseAxios from "../Hook/UseAxios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UserRole from "../Hook/UserRole";

const UpdateMagazine = () => {
  const { id } = useParams(); 
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMagazineData = async () => {
      try {
        const res = await Axios.get(`/user/magazine/${id}`);
        if (res.data) {
          setFormData(res.data);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch magazine data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMagazineData();
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
      const res = await Axios.put(`/admin/update-magazine/${id}`, formData);
      if (res.data) {
        toast.success("Magazine updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update magazine.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-4/5 mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Magazine</h2>
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
        <div className="text-center">
          <button
            type="submit"
            className={`p-3 rounded-lg w-full ${
              role === "student"
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
            disabled={role === "student"}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMagazine;
