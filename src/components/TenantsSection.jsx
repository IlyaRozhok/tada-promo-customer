import React from "react";
import AnimatedCardsContainer from "./AnimatedCardsContainer";

const TenantsSection = () => {
  const tenantCards = [
    {
      id: 1,
      category: "Rental CV",
      title: "Create Your Profile",
      description: "Show who you are and let the right homes come to you",
      icon: true,
    },
    {
      id: 2,
      category: "Best Matches",
      title: "Smart Property Search",
      description: "Swipe, match and message landlords before anyone else",
      icon: true,
    },
    {
      id: 3,
      category: "Clear Pass",
      title: "Rent Ready",
      description:
        "Referencing, credit score and deposit handling all in one place",
      icon: true,
    },
    {
      id: 4,
      category: "Only for you",
      title: "Exclusive Deals",
      description:
        "Off-market homes, discounted rents and perks from property operators & utilities providers",
      icon: true,
    },
  ];

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/src/assets/tenants-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-white text-lg font-medium mb-4">For Tenants</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sf-pro font-semibold text-white leading-tight max-w-4xl">
            Rent, Reinvented.
          </h2>
          <p className="text-white text-lg mt-6 max-w-2xl opacity-90">
            No more endless scrolling or missed opportunities.
          </p>
        </div>

        {/* Animated Cards */}
        <AnimatedCardsContainer
          cards={tenantCards}
          triggerOffset={["start 0.8", "end 1"]}
        />
      </div>
    </section>
  );
};

export default TenantsSection;
