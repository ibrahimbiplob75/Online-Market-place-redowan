import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import UseAxios from "../Hook/UseAxios";
import Container from "./UI/Container";

const ProductDetails = () => {
  const Axios = UseAxios();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await Axios.get(`/user/product/${id}`);
        setProduct(response?.data);
      } catch (error) {
        console.error("Failed to fetch Product details:", error);
        toast.error("Failed to load Product details.");
      }
    };

    fetchProductDetails();
  }, [id, Axios]);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${quantity} of ${product?.title} to cart`);
  };

  return (
    <Container className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="grid grid-cols-2 gap-4">
          {product?.multiple_images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product?.title} ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <p className="text-gray-600">{product?.description}</p>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-semibold">Price: {product?.price} Taka</span>
            <span className="text-sm text-gray-500 line-through">
              {Math.round(product?.price / (1 - product.discount / 100))}
            </span>
            <span className="text-sm text-green-600">{product?.discount}% off</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-semibold">Color:</span>
            <div className="flex space-x-2">
              {product?.color?.split(",").map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: color.trim() }}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-semibold">Quantity:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 px-3 py-2 border rounded-lg"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>

          <div className="flex items-center space-x-4">
            <span className="font-semibold">Rating:</span>
            <div className="rating rating-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-yellow-400"
                  checked={star === 4.5}
                  readOnly
                />
              ))}
            </div>
            <span className="text-sm">(4.5/5)</span>
          </div>

          <div className="flex space-x-2">
            <div className="badge badge-outline">Traditional</div>
            <div className="badge badge-outline">Women's Wear</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

// Corrected PropTypes definition
ProductDetails.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    multiple_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default ProductDetails;