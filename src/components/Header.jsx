import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-md rounded-full mx-6 mt-6 px-8 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-xl font-semibold">:: TADA</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#platform"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Platform
          </a>
          <a
            href="#idea"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Our Idea
          </a>
          <a
            href="#tenant"
            className="text-white hover:text-gray-300 transition-colors"
          >
            For Tenant
          </a>
          <a
            href="#onboarding"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Onboarding
          </a>
          <a
            href="#social"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Social Media
          </a>
          <a
            href="#team"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About Team
          </a>
        </nav>

        {/* CTA Button */}
        <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
          Request a demo
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
