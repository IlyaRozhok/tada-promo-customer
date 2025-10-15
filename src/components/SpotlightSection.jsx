import React from "react";

const SpotlightSection = () => {
  // Array of spotlight images in clockwise order starting from top-left
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sf-pro font-semibold text-gray-900 leading-tight max-w-4xl mb-8">
            Spotlight Series and Seamless Onboarding
          </h2>
          <p className="text-gray-700 text-lg mb-12 max-w-2xl">
            In just 1–2 hours on site, our team will
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                {/* Camera icon placeholder */}
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </div>
              <div>
                <p className="text-gray-900 font-medium leading-relaxed">
                  Capture your development for the Spotlight Series with free
                  professional photo & video content
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                {/* Building icon placeholder */}
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </div>
              <div>
                <p className="text-gray-900 font-medium leading-relaxed">
                  Promote your building across TA-DA's social channels, reaching
                  thousands of tenants
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                {/* Truck icon placeholder */}
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </div>
              <div>
                <p className="text-gray-900 font-medium leading-relaxed">
                  Seamlessly onboard your properties — no heavy lifting required
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                {/* People icon placeholder */}
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </div>
              <div>
                <p className="text-gray-900 font-medium leading-relaxed">
                  Start sending you verified, rent-ready tenants matched to your
                  requirements
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-8">
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
                      src={spotlightImages[5].src}
                      alt={spotlightImages[5].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - 4 stacked images with different heights */}
            <div className="absolute right-0 top-0 w-[24%] h-full">
              <div className="flex flex-col gap-2 h-full">
                {/* Top right - small (spotlight-4) */}
                <div className="h-[20%]">
                  <div className="h-full overflow-hidden rounded-2xl">
                    <img
                      src={spotlightImages[3].src}
                      alt={spotlightImages[3].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Second from top - small (spotlight-5) */}
                <div className="h-[20%]">
                  <div className="h-full overflow-hidden rounded-2xl">
                    <img
                      src={spotlightImages[4].src}
                      alt={spotlightImages[4].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Third from top - larger middle (spotlight-7) */}
                <div className="h-[35%]">
                  <div className="h-full overflow-hidden rounded-2xl">
                    <img
                      src={spotlightImages[6].src}
                      alt={spotlightImages[6].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Bottom right - small (spotlight-8 duplicate or another image) */}
                <div className="h-[21%]">
                  <div className="h-full overflow-hidden rounded-2xl">
                    <img
                      src={spotlightImages[0].src}
                      alt={spotlightImages[0].alt}
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
