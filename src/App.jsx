import React from "react";
import HeroWrapper from "./components/HeroWrapper";
import CardsSection from "./components/CardsSection";
import TenantsWrapper from "./components/TenantsWrapper";
import SpotlightSection from "./components/SpotlightSection";
import SocialMediaSection from "./components/SocialMediaSection";
import AboutUsSection from "./components/AboutUsSection";
import PartnersSection from "./components/PartnersSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with background image */}
      <HeroWrapper />

      {/* Cards section */}
      <CardsSection />

      {/* Partners section */}
      <PartnersSection />
      {/* Tenants section */}
      <TenantsWrapper />

      {/* Spotlight section */}
      <SpotlightSection />

      {/* Social Media section */}
      <SocialMediaSection />

      {/* About Us section */}
      <AboutUsSection />
    </div>
  );
}

export default App;
