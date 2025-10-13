import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Background apartment interior - we'll add this as a background image */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>

      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
