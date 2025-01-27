
import React from "react";
import { useNavigate } from "react-router-dom";
import love_box from "../../src/assets/Images/sharee_love_box.jpg"
import sharee from "../../src/assets/Images/sharee.jpg"
import shawl from "../../src/assets/Images/SHAWL.jpg"
const OurCollections = () => {
  const navigate = useNavigate();

  // Handle navigation when clicking on a category card
  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    <div className="py-10 bg-gray-100 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10">
        {/* Card 1 */}
        <div
          className="relative rounded-lg shadow-lg overflow-hidden group cursor-pointer"
          onClick={() => handleCategoryClick("Love Box")}
        >
          <img
            src={love_box}
            alt="Love Box"
            className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-4xl font-bold text-white">Love Box</span>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative rounded-lg shadow-lg overflow-hidden group cursor-pointer"
          onClick={() => handleCategoryClick("Saree")}
        >
          <img
            src={sharee}
            alt="Saree"
            className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-4xl font-bold text-white">Saree</span>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative rounded-lg shadow-lg overflow-hidden group cursor-pointer"
          onClick={() => handleCategoryClick("Shawl")}
        >
          <img
            src={shawl}
            alt="Shawl"
            className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-4xl font-bold text-white">Shawl</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCollections;
