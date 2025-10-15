import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span className="text-2xl font-bold">TADA</span>
              </div>
            </div>

            {/* Company Name */}
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              TA-DA.ME LTD
            </h3>

            {/* Company Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gray-400 text-sm mb-2">Company number</h4>
                <p className="text-white text-lg">16647779</p>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-2">Address</h4>
                <p className="text-white text-lg">
                  Unit B, 23 Alphabet Mews, SW9 0FN, London
                </p>
              </div>
            </div>
          </div>

          {/* Right side - could be used for additional content */}
          <div className="hidden lg:block">
            {/* Placeholder for future content */}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm">
                Copyright © 2025 TA-DA.ME LTD. All rights reserved.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-6 mb-4 lg:mb-0">
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Terms of Use
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Sales and Refunds
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Legal
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-gray-400 text-sm">United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
