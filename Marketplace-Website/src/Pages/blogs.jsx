import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blogs data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user/blogs");
        setBlogs(response.data); // Assuming the API response is an array of blogs
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="card bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={blog.image || "https://via.placeholder.com/300"} // Fallback image if not provided
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Posted by <span className="font-medium">{blog.author}</span> · {blog.time}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">
                    Total Reads: <span className="font-medium">{blog.reads}</span>
                  </span>
                  <Link to={`/blog-details/${blog._id}`} className="btn btn-primary btn-sm">
                    details...
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
