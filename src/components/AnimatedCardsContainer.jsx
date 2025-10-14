import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedCardsContainer = ({
  cards,
  triggerOffset = ["start 0.8", "end 1"],
  className = "",
}) => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: triggerOffset,
  });

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
  const cardWidth = 320; // Single card width
  const gapWidth = 24; // Gap between cards
  const fourCardsWidth = 4 * cardWidth + 3 * gapWidth; // 1352px total

  let startPosition, endPosition;

  if (screenWidth > 0) {
    // Check if screen can fit all 4 cards comfortably (with some margin)
    if (screenWidth >= fourCardsWidth + 100) {
      // Large screens (1920px etc): Standard behavior
      startPosition = 550;
      endPosition = 0;
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
    <div className={`relative ${className}`} ref={sectionRef}>
      {/* Desktop: Horizontal animated cards */}
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <motion.div className="flex space-x-6" style={{ x }}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Card Header */}
              {card.category && (
                <div className="px-6 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600 font-medium">
                      {card.category}
                    </span>
                    {card.icon && (
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">+</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Card Image (if exists) */}
              {card.image && (
                <div className="h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title || `Card ${card.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                {card.title && (
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                )}
                <p className="text-gray-700 text-base leading-relaxed">
                  {card.text || card.description}
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
              {/* Card Header */}
              {card.category && (
                <div className="px-6 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600 font-medium">
                      {card.category}
                    </span>
                    {card.icon && (
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">+</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Card Image (if exists) */}
              {card.image && (
                <div className="h-48 md:h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title || `Card ${card.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                {card.title && (
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                )}
                <p className="text-gray-700 text-base leading-relaxed">
                  {card.text || card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCardsContainer;
