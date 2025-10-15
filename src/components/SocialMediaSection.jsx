import React from "react";
import AnimatedCardsContainer from "./AnimatedCardsContainer";

const SocialMediaSection = () => {
  const socialCards = [
    {
      id: 1,
      image: "/src/assets/img_social_00.png", // Placeholder - картинки пока не используем
    },
    {
      id: 2,
      image: "/src/assets/img_social_01.png", // Placeholder
    },
    {
      id: 3,
      image: "/src/assets/img_social_02.png", // Placeholder
    },
    {
      id: 4,
      image: "/src/assets/img_social_03.png", // Placeholder
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-gray-600 text-lg font-medium mb-2">
            Social Media & Lifestyle Content
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-sf-pro font-semibold text-gray-900 max-w-4xl">
            Homes are only half the story.
          </h2>
          <p className="text-gray-600 text-lg mt-8 max-w-md">
            Through TA-DA's Spotlight Series and local guides, tenants and
            operators showcase not just apartments, but the lifestyle around
            them.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-black text-white px-8 py-4 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
              Watch example video
            </button>
            <button className="text-black cursor-pointer font-semibold hover:text-gray-600 transition-colors flex items-center">
              Go to our Instagram
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Animated Cards */}
        <AnimatedCardsContainer
          cards={socialCards}
          triggerOffset={["start 0.8", "end 1"]}
        />

        {/* Additional Content Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-sf-pro font-semibold text-gray-900 leading-tight max-w-4xl mb-8">
            Video tours, amenity highlights and{" "}
            <span className="bg-gradient-to-r from-[#909447] to-[#1D1D1F] bg-clip-text text-transparent">
              neighbourhood deep dives
            </span>
          </h3>

          <h4 className="text-2xl md:text-4xl lg:text-5xl font-sf-pro font-semibold leading-tight max-w-2xl ml-[30%]">
            Authentic content that builds{" "}
            <span className="bg-[linear-gradient(0deg,#ECC5C5_0%,#1D1D1F_90%)] bg-clip-text text-transparent">
              trust and desirability
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
