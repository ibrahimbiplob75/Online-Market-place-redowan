import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import love_box from "../../src/assets/Images/sharee_love_box.jpg"


const ProductCard = ({ service }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={love_box}
      alt="Women's Saree" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Women's Saree
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Elegant and trendy saree, perfect for any occasion. Style and tradition in one!</p>
    
    <div className="flex justify-between my-2 text-sm">
      <div>
        <span className="font-semibold">Total Sales:</span> 120
      </div>
      <div>
        <span className="font-semibold">Remaining:</span> 30
      </div>
    </div>
    <div className="flex justify-between my-2 text-sm">
      <div className="text-2xl">
        <span className="font-semibold ">Price:</span> 5000
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
      <div className="badge badge-outline">Women's Wear</div>
    </div>
  </div>
</div>

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
