import React from "react";
import HeroWrapper from "./components/HeroWrapper";
import CardsSection from "./components/CardsSection";
import TenantsSection from "./components/TenantsSection";
import PartnersSection from "./components/PartnersSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with background image */}
      <HeroWrapper />

      {/* Cards section */}
      <CardsSection />

      {/* Tenants section */}
      <TenantsSection />

      {/* Partners section */}
      <PartnersSection />
    </div>
  );
}

export default App;
