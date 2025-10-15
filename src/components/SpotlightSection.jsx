import React from "react";
import camera from "../assets/camera.png";
import building from "../assets/building.png";
import verify from "../assets/verify.png";
import addCard from "../assets/addCard.png";

const SpotlightSection = () => {
  const spotlightImages = [
    {
      id: 1,
      src: "/src/assets/spotlight-1.png",
      alt: "Modern apartment living room",
    },
    {
      id: 2,
      src: "/src/assets/spotlight-2.png",
      alt: "Apartment balcony view",
    },
    { id: 3, src: "/src/assets/spotlight-3.png", alt: "Contemporary kitchen" },
    { id: 4, src: "/src/assets/spotlight-4.png", alt: "Dining area" },
    { id: 5, src: "/src/assets/spotlight-5.png", alt: "Bedroom interior" },
    { id: 6, src: "/src/assets/spotlight-6.png", alt: "Bathroom design" },
    { id: 7, src: "/src/assets/spotlight-7.png", alt: "Living space" },
    { id: 8, src: "/src/assets/spotlight-8.png", alt: "Kitchen detail" },
  ];

  return (
    <section id="spotlight" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-sf-pro font-semibold text-gray-900 leading-tight max-w-4xl mb-8">
            Spotlight Series and Seamless Onboarding
          </h2>
          <p className="text-gray-700 text-lg mb-12 max-w-2xl">
            In just 1–2 hours on site, our team will
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl">
            {/* Feature 1 */}
            <div className="grid grid-cols-[24px,1fr] items-start gap-x-3">
              <img className="w-8" src={camera} alt="camera" />
              <div className="space-y-1">
                <p className="text-gray-900 mt-2 leading-relaxed">
                  Capture your development for the Spotlight Series with free
                  professional photo & video content
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-[24px,1fr] items-start gap-x-3">
              <img className="w-6" src={building} alt="building" />
              <div className="space-y-1">
                <p className="text-gray-900 mt-2 leading-relaxed">
                  Promote your building across TA-DA's social channels, reaching
                  thousands of tenants
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-[24px,1fr] items-start gap-x-3">
              <img className="w-8" src={addCard} alt="addCard" />
              <div className="space-y-1">
                <p className="text-gray-900 mt-2 leading-relaxed">
                  Seamlessly onboard your properties — no heavy lifting required
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid grid-cols-[24px,1fr] items-start gap-x-3">
              <img className="w-8" src={verify} alt="verify" />
              <div className="space-y-1">
                <p className="text-gray-900 mt-2 leading-relaxed">
                  Start sending you verified, rent-ready tenants matched to your
                  requirements
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-black cursor-pointer text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors mb-8">
            Book your Spotlight
          </button>

          <p className="text-gray-700 text-base mb-12">
            Onboard today and see how TA-DA can promote your properties and fill
            your homes faster.
          </p>
        </div>

        {/* Adaptive Image Grid - Exact layout from reference */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Simple 2 column grid */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {spotlightImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Desktop: Exact masonry layout matching the reference */}
          <div className="hidden md:block relative h-[500px]">
            {/* Left column - 2 images with different heights */}
            <div className="absolute left-0 top-0 w-[24%] h-full">
              <div className="flex flex-col gap-2 h-full">
                {/* Top left - larger height (spotlight-1) */}
                <div className="h-[60%]">
                  <div className="h-full overflow-hidden rounded-2xl">
                    <img
                      src={spotlightImages[0].src}
                      alt={spotlightImages[0].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Bottom left - smaller height (spotlight-8) */}
                <div className="h-[38%]">
                  <div className="h-full overflow-hidden rounded-2xl">
                    <img
                      src={spotlightImages[7].src}
                      alt={spotlightImages[7].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Center area - 3 images */}
            <div className="absolute left-[25.5%] top-0 w-[49%] h-full">
              <div className="flex flex-col gap-2 h-full">
                {/* Top row - 2 images with different widths */}
                <div className="h-[48%] flex gap-2">
                  {/* Top center left - wider (spotlight-2) */}
                  <div className="w-[60%]">
                    <div className="h-full overflow-hidden rounded-2xl">
                      <img
                        src={spotlightImages[1].src}
                        alt={spotlightImages[1].alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Top center right - narrower (spotlight-3) */}
                  <div className="w-[38%]">
                    <div className="h-full overflow-hidden rounded-2xl">
                      <img
                        src={spotlightImages[2].src}
                        alt={spotlightImages[2].alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom center - full width (spotlight-6) */}
                <div className="h-[50%]">
                  <div className="h-full overflow-hidden rounded-2xl">
                    <img
                      src={spotlightImages[6].src}
                      alt={spotlightImages[6].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - 2 stacked images with different heights (same as left) */}
            <div className="absolute right-0 top-0 w-[24%] h-full">
              <div className="flex flex-col gap-2 h-full">
                {/* Top right - larger height (spotlight-4) */}
                <div className="h-[60%]">
                  <div className="h-full overflow-hidden rounded-2xl">
                    <img
                      src={spotlightImages[4].src}
                      alt={spotlightImages[4].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Bottom right - smaller height (spotlight-5) */}
                <div className="h-[38%]">
                  <div className="h-full overflow-hidden rounded-2xl">
                    <img
                      src={spotlightImages[3].src}
                      alt={spotlightImages[3].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
