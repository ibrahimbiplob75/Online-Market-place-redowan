import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseAxios from "../Hook/UseAxios";


const BlogDetails = () => {
  const Axios=UseAxios()
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Fetch blog details from the API
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`/user/blogs/${id}`);
        setBlog(response.data); 
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog details.");
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Blog Image */}
        {blog?.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
        )}

        {/* Blog Content */}
        <div className="p-6">
          {/* Blog Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog?.title}</h1>

          {/* Blog Metadata */}
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <span>
              Posted by <span className="font-medium">{blog?.author}</span> · {blog?.time}
            </span>
            <div className="flex items-center gap-4">
              <span>Total Reads: {blog?.reads}</span>
              <button className="btn btn-primary btn-sm">Share</button>
            </div>
          </div>

          {/* Blog Description */}
          <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {blog?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
