import { Link } from "react-router-dom";
import PropTypes from "prop-types";



const MagazineCard = ({ service }) => {
  return (
    <Link to={`/magazine/details/${service?._id}`} className="group relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg">
      {/* Image Section */}
      <div className="relative w-full h-[650px]">
        <img
          src={
            service?.image ||
            "https://via.placeholder.com/300x200?text=Demo+Image" // Demo Image
          }
          alt={service?.title || "Demo Title"}
          className="w-auto h-auto "
        />
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <h1 className="text-white text-xl font-bold text-center">
            {service?.title || "Demo Title"}
          </h1>
        </div>
      </div>
    </Link>
  );
};

MagazineCard.propTypes = {
  service: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default MagazineCard;
