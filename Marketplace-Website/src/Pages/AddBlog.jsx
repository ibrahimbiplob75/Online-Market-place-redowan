import React, { useState } from "react";
import { toast } from "react-toastify";
import UseAxios from "../Hook/UseAxios";

const AddBlogPost = () => {
  const Axios = UseAxios();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    time: "",
    reads: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.author || !formData.image || !formData.description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const res = await Axios.post(`/admin/create-blogs`, formData);
      if (res.data) {
        toast.success("New blog added successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add blog.");
    }

    // Reset the form
    setFormData({
      title: "",
      author: "",
      time: "",
      reads: "",
      image: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">Add a New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          {/* Blog Title */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="input input-bordered"
              required
            />
          </div>

          {/* Blog Author */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author's name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Blog Time */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Time (e.g., "2 hours ago")</span>
            </label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="Enter time"
              className="input input-bordered"
            />
          </div>

          {/* Total Reads */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Total Reads</span>
            </label>
            <input
              type="text"
              name="reads"
              value={formData.reads}
              onChange={handleChange}
              placeholder="Enter total reads"
              className="input input-bordered"
            />
          </div>

          {/* Blog Image URL */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Blog Description */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write the blog description here..."
              className="textarea textarea-bordered"
              rows="6"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPost;
