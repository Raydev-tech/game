import React from "react";
import { FaGooglePlay, FaApple, FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>123 Tech Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@demo.com</li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">My Orders</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Account Details</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Wishlist</a></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="flex space-x-6 text-gray-700 text-3xl">
              <a href="#" className="hover:text-gray-900"><FaGooglePlay /></a>
              <a href="#" className="hover:text-gray-900"><FaApple /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2026 DEMO. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-gray-700 text-3xl">
              <FaCcVisa />
              <FaCcMastercard />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
