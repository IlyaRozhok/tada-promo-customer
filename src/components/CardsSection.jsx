import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CardsSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 1"], // Trigger 200px higher (more towards top)
  });

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

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Universal logic with adaptive behavior for smaller screens
  const cardWidth = 0; // Single card width
  const gapWidth = 24; // Gap between cards
  const fourCardsWidth = 4 * cardWidth + 3 * gapWidth; // 1352px total

  let startPosition, endPosition;

  if (screenWidth > 0) {
    // Check if screen can fit all 4 cards comfortably (with some margin)
    if (screenWidth >= fourCardsWidth + 100) {
      // Large screens (1920px etc): Standard behavior
      startPosition = 550;
      endPosition = -(cardWidth + gapWidth);
    } else {
      // Smaller screens (1512px etc): Adjust to fit all cards
      const availableSpace = screenWidth - 100; // Leave 100px margin
      const overflow = fourCardsWidth - availableSpace;

      // Start more to the right to accommodate all cards
      startPosition = 400 + overflow / 2; // Adjust start position
      endPosition = -(cardWidth + gapWidth) + overflow / 2; // Adjust end position
    }
  } else {
    // Fallback
    startPosition = 550;
    endPosition = -(cardWidth + gapWidth);
  }

  // Transform X position based on scroll
  const x = useTransform(scrollYProgress, [0, 1], [startPosition, endPosition]);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
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

        {/* Cards Container */}
        <div className="relative">
          {/* Desktop: Horizontal scrolling cards */}
          <div className={`${isMobile ? "hidden" : "block"}`}>
            <motion.div className="flex space-x-6" style={{ x }}>
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Card Image */}
                  <div className="h-64 bg-gray-100 overflow-hidden">
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile & Tablet: Vertical grid */}
          <div className={`${isMobile ? "block" : "hidden"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Card Image */}
                  <div className="h-48 md:h-56 bg-gray-100 overflow-hidden">
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
