import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UseAxios from "../Hook/UseAxios";
import { toast } from "react-toastify";

const MagazineDetails = () => {
  const { id } = useParams();
  const Axios = UseAxios();
  const navigate = useNavigate();
  const [magazine, setMagazine] = useState(null);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const fetchMagazineDetails = async () => {
      try {
        const response = await Axios.get(`/user/magazine/${id}`);
        setMagazine(response.data);
      } catch (error) {
        console.error("Failed to fetch magazine details:", error);
        toast.error("Failed to load magazine details.");
      }
    };

    fetchMagazineDetails();
  }, [id, Axios]);

  const handlePurchaseClick = () => {
    setPaymentModalOpen(true);
  };

  const handlePayment = async () => {
    try {
      const response = await Axios.post("/user/create-booking", {
        magazineId: magazine._id,
        title: magazine.title,
        price: magazine.price,
        status:"pending",
        purchaseTime: new Date().toISOString(),
      });

      if (response.data) {
        setPaymentSuccess(true);
        toast.success("Payment successful! Redirecting to home...");
        setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment failed. Please try again.");
    } finally {
      setPaymentModalOpen(false);
    }
  };

  if (!magazine) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section: Magazine Details */}
      <div className="w-full md:w-1/2">
        <img
          src={magazine.image}
          alt={magazine.title}
          className="w-full h-680 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{magazine.title}</h1>
        <p className="text-gray-700 mb-4">{magazine.description}</p>
        <p className="text-xl font-semibold text-green-600">Price: ${magazine.price}</p>
        <p className="text-sm text-gray-500 mt-2">Added by: {magazine.added_by}</p>
        <p className="text-sm text-gray-500">Added on: {new Date(magazine.time).toLocaleString()}</p>
      </div>

      {/* Right Section: Purchase Button */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center border p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Ready to own this magazine?</h2>
        <button
          onClick={handlePurchaseClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
        >
          Buy Now for ${magazine.price}
        </button>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
            <p className="text-gray-700 mb-4">Pay ${magazine.price} to complete your purchase.</p>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              placeholder="Enter Card Number"
            />
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              placeholder="Expiry Date (MM/YY)"
            />
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              placeholder="CVV"
            />
            <div className="flex justify-end">
              <button
                onClick={handlePayment}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
              >
                Pay
              </button>
              <button
                onClick={() => setPaymentModalOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagazineDetails;
