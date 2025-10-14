import React from "react";
import HeroWrapper from "./components/HeroWrapper";
import CardsSection from "./components/CardsSection";
import TenantsWrapper from "./components/TenantsWrapper";
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
    </div>
  );
}

export default App;
