import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate blur and scale based on scroll position
  const maxScroll = 300; // Maximum scroll distance for full effect
  const blurIntensity = Math.min(scrollY / maxScroll, 1) * 20; // Max 20px blur
  const scaleValue = 1 - Math.min(scrollY / maxScroll, 1) * 0.05; // Scale from 1 to 0.95
  const opacityValue = 1 - Math.min(scrollY / maxScroll, 1) * 0.3; // Opacity from 1 to 0.7

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className="fixed top-6 left-6 right-6 z-50 bg-black/30 backdrop-blur-md rounded-full px-8 py-4 shadow-lg transition-all duration-300 ease-out"
      style={{
        backdropFilter: `blur(${8 + blurIntensity}px)`,
        transform: `scale(${scaleValue})`,
        backgroundColor: `rgba(((60, 60, 60);, 1), ${0.8 * opacityValue})`,
      }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-xl font-semibold">:: TADA</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white hover:text-gray-300 transition-colors"
          >
            Platform
          </button>
          <button
            onClick={() => scrollToSection("cards")}
            className="text-white hover:text-gray-300 transition-colors"
          >
            Our Idea
          </button>
          <button
            onClick={() => scrollToSection("tenants")}
            className="text-white hover:text-gray-300 transition-colors"
          >
            For Tenant
          </button>
          <button
            onClick={() => scrollToSection("spotlight")}
            className="text-white hover:text-gray-300 transition-colors"
          >
            Onboarding
          </button>
          <button
            onClick={() => scrollToSection("social-media")}
            className="text-white hover:text-gray-300 transition-colors"
          >
            Social Media
          </button>
          <button
            onClick={() => scrollToSection("about-us")}
            className="text-white hover:text-gray-300 transition-colors"
          >
            About Team
          </button>
        </nav>

        {/* CTA Button */}
        <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors font-medium">
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
