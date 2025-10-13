import React from "react";
import AnimatedCardsContainer from "./AnimatedCardsContainer";

const CardsSection = () => {
  const cards = [
    {
      id: 1,
      image: "/src/assets/black-woman.png",
      text: "Pre-verified tenant pool — credit-checked, referenced and rent-ready",
    },
    {
      id: 2,
      image: "/src/assets/google.png",
      text: "Corporate partnerships — relocating professionals and international students from top companies & universities",
    },
    {
      id: 3,
      image: "/src/assets/handshake.png",
      text: "Exclusive exposure — showcase your properties directly to quality tenants without the noise of portals",
    },
    {
      id: 4,
      image: "/src/assets/woman-laptop.png",
      text: "Streamlined onboarding — referencing, deposits, viewings and contracts handled seamlessly in one platform",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center lg:text-start mb-16">
          <p className="text-gray-600 text-sm uppercase tracking-wide mb-4">
            For BTR Operators, Developers & Landlords
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sf-pro font-semibold text-gray-900 leading-tight max-w-4xl lg:mx-0 mx-auto">
            Goodbye to endless inbound calls, emails and wasted viewings.
          </h2>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl lg:mx-0 mx-auto">
            With TA-DA, you get instant notifications, verified tenants and the
            power to choose the best matches for your homes.
          </p>
        </div>

        {/* Animated Cards */}
        <AnimatedCardsContainer
          cards={cards}
          triggerOffset={["start 0.8", "end 1"]}
        />
      </div>
    </section>
  );
};

export default CardsSection;
