import React from "react";

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: "Stripe",
      logo: "/src/assets/stripe.png",
      description: "Financial infrastructure to grow your revenue",
      highlighted: false,
    },
    {
      id: 2,
      name: "Experian",
      logo: "/src/assets/experian.png",
      description: "Tenant verification infrastructure to protect your rentals",
      highlighted: false,
    },
    {
      id: 3,
      name: "Deposit Protection Service",
      logo: "/src/assets/depos-protect-service.png",
      description: "Surprisingly easy deposit protection",
      highlighted: false,
    },
    {
      id: 4,
      name: "Octopus Energy",
      logo: "/src/assets/octopus.png",
      description: "UK's most popular energy supplier",
      highlighted: false,
    },
    {
      id: 5,
      name: "ARL",
      logo: "/src/assets/arl.png",
      description: "Association for Rental Living",
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-white border-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sf-pro font-semibold text-gray-900 mb-8">
            Our partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {partners.slice(0, 3).map((partner) => (
              <div
                key={partner.id}
                className={`
                  p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white hover:border-gray-300
                `}
              >
                {/* Partner Logo */}
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Partner Description */}
                <p className="text-gray-700 text-base font-medium leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partners.slice(3, 5).map((partner) => (
              <div
                key={partner.id}
                className="p-8 border border-gray-200 rounded-2xl text-center bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Partner Logo */}
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Partner Description */}
                <p className="text-gray-700 text-base font-medium leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
