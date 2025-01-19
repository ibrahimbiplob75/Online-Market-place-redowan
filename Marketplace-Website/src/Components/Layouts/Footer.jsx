import { GrFacebook, GrTwitter, GrLinkedin, GrInstagram } from "react-icons/gr";
import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
          {/* About Section */}
          <div>
            <h1 className="text-2xl font-semibold mb-4">Magazine Hub</h1>
            <p className="text-sm leading-relaxed text-gray-400">
              Discover the latest trends, stories, and insights from around the
              world. Stay connected with a community that loves reading, sharing,
              and exploring ideas.
            </p>
            <div className="flex gap-5 text-2xl text-white mt-6">
              <GrFacebook className="cursor-pointer hover:text-blue-500" />
              <GrTwitter className="cursor-pointer hover:text-blue-400" />
              <GrLinkedin className="cursor-pointer hover:text-blue-700" />
              <GrInstagram className="cursor-pointer hover:text-pink-500" />
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer text-gray-300">
                About Us
              </li>
              <li className="hover:underline cursor-pointer text-gray-300">
                Contact Us
              </li>
              <li className="hover:underline cursor-pointer text-gray-300">
                Careers
              </li>
              <li className="hover:underline cursor-pointer text-gray-300">
                Advertise with Us
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-lg font-bold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer text-gray-300">
                Privacy Policy
              </li>
              <li className="hover:underline cursor-pointer text-gray-300">
                Terms of Service
              </li>
              <li className="hover:underline cursor-pointer text-gray-300">
                FAQs
              </li>
              <li className="hover:underline cursor-pointer text-gray-300">
                Subscription Plans
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">
              Address: Noyarhat, Kohinur, Dhaka
            </p>
            <p className="text-gray-400">Phone: +019 1892 6163</p>
            <p className="text-gray-400">Email: info@magazinehub.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 Magazine Hub. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <p className="text-sm text-gray-500 hover:underline cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-sm text-gray-500 hover:underline cursor-pointer">
              Terms of Service
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
