import React from "react";
import bkash from "../../assets/Images/Baksh.png"
import nogod from "../../assets/Images/Nagad-Logo.wine.png"
import rocket from "../../assets/Images/dutch-bangla-rocket-logo-png_seeklogo-317692.png"
import visa from "../../assets/Images/Visa_Inc.-Logo.wine.png"
import Amexpress from "../../assets/Images/American_Express-Logo.wine.png"
import mastercard from "../../assets/Images/Mastercard-Logo.wine.png"
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Legal Section */}
        <div className="ml-10">
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Payment Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="ml-10">
          <h3 className="font-bold text-lg mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Exchange & Refund</a></li>
            <li><a href="#" className="hover:text-gray-900">Size Guide</a></li>
            <li><a href="#" className="hover:text-gray-900">Loyalty Program</a></li>
            <li><a href="#" className="hover:text-gray-900">Display Centers</a></li>
          </ul>
        </div>

        {/* Company Section */}
        {/* <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Intellectual Property</a></li>
          </ul>
        </div> */}

        {/* Payment and Service Center Section */}
        <div className="ml-4">
          <h3 className="font-bold text-lg mb-4 ml-6">You can pay by</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 space-x-2 mb-4">
            <img src={visa} alt="Visa" className="h-12" />
            <img src={mastercard} alt="MasterCard" className="h-12" />
            <img src={Amexpress} alt="American Express" className="h-12" />
            <img src={bkash} alt="bKash" className="h-12" />
            <img src={rocket} alt="bKash" className="h-12" />
            <img src={nogod} alt="bKash" className="h-12" />
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
