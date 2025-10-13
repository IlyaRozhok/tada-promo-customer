import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";

const HeroWrapper = () => {
  return (
    <section className="relative min-h-screen bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/bg.avif')",
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
    </section>
  );
};

export default HeroWrapper;
