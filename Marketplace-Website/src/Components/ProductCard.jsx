import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import love_box from "../../src/assets/Images/sharee_love_box.jpg"
import { useState } from "react";


const ProductCard = ({ product }) => {
  // console.log(product)
  const [expanded, setExpanded] = useState(false);

  if (!product?.description) return null;
  return (
    <Link to={`/product/details/${product?._id}`} className="card bg-base-100 w-72 xl:w-96 shadow-xl">
      <figure>
        <img
          src={product?.multiple_images[0]}
          alt="Women's Saree" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product?.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
         <p>
      {expanded || product.description.length <= 60
        ? product.description
        : `${product.description.slice(0, 60)}... `}
      {product.description.length > 60 && (
        <button onClick={() => setExpanded(!expanded)} className="text-blue-500 underline">
          {expanded ? "See Less" : "See More"}
        </button>
      )}
      </p>
        
        <div className="flex justify-between my-2 text-sm">
          <div>
            <span className="font-semibold">Total Sales:</span> 120
          </div>
          <div>
            <span className="font-semibold">Remaining:</span> {product?.total_collection}
          </div>
        </div>
        <div className="flex justify-between my-2 text-sm">
          <div className="text-2xl">
            <span className="font-semibold ">Price:</span> {product?.price}
          </div>
          <div className="flex items-center my-2">
          <div className="rating rating-sm">
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-400"  />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-400" />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-400" />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-400 " checked />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-400" />
          </div>
          <span className="ml-2 text-sm">(4.5/5)</span>
        </div>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Traditional</div>
          <div className="badge badge-outline">{product?.category}</div>
        </div>
      </div>
    </Link>

  );
};

ProductCard.propTypes = {
  service: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
