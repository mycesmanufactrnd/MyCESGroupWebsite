"use client";

import { VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "our-people", label: "Our People" },
  { id: "team-purpose", label: "Our Purpose" },
  { id: "meet-the-team", label: "Meet The Team" },
];

export default function ScrollBulletsTeam() {
  const [activeSection, setActiveSection] = useState("");
  const [showBullets, setShowBullets] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Observe hero to hide bullets only when hero is mostly visible
    const heroEl = document.getElementById("hero");
    const heroObserver = new IntersectionObserver(
      ([entry]) => setShowBullets(!entry.isIntersecting), // bullets appear when hero scrolls out
      { threshold: 0.05 }, // slightly visible threshold
    );
    if (heroEl) heroObserver.observe(heroEl);

    // Observe all sections to track active section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  // Show bullets even for hero once scrolled a bit
  if (!showBullets) return null;

  return (
    <VStack
      position="fixed"
      top="50%"
      right="2rem"
      transform="translateY(-50%)"
      gap={4}
      zIndex={100}
    >
      {sections.map((sec) => (
        <Box
          key={sec.id}
          position="relative"
          onMouseEnter={() => setHovered(sec.id)}
          onMouseLeave={() => setHovered(null)}
          cursor="pointer"
          onClick={() => handleScroll(sec.id)}
        >
          {/* Bullet */}
          <Box
            w="12px"
            h="12px"
            borderRadius="full"
            bg={activeSection === sec.id ? "green.800" : "gray.400"} // active bullet color
            transition="all 0.3s ease"
          />

          {/* Tooltip */}
          {hovered === sec.id && (
            <Box
              position="absolute"
              right="140%"
              top="50%"
              transform="translateY(-50%)"
              bg="black"
              color="white"
              px={3}
              py={1}
              fontSize="xs"
              whiteSpace="nowrap"
              borderRadius="md"
              zIndex={10}
            >
              {sec.label}
              <Box
                position="absolute"
                right="-5px"
                top="50%"
                transform="translateY(-50%) rotate(45deg)"
                w="6px"
                h="6px"
                bg="black"
              />
            </Box>
          )}
        </Box>
      ))}
    </VStack>
  );
}
