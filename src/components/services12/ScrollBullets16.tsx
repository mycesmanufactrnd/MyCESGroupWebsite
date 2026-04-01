"use client";

import { VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "intro", label: "Overview" },
  { id: "ms", label: "Our Mission and Vision" },
  { id: "corevalue", label: "Our Core Values" },
  { id: "services", label: "Our Service" },
  { id: "usp", label: "Unit Selling Protocol" },
  { id: "customer", label: "Our Customer" },
  { id: "team", label: "Our Team" },
  { id: "backtop", label: "Back" },
];

export default function ScrollBullets() {
  const [activeSection, setActiveSection] = useState("");
  const [showBullets, setShowBullets] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Observer for hero section to hide bullets while at top
    const hero = document.getElementById("hero");
    const heroObserver = new IntersectionObserver(
      ([entry]) => setShowBullets(!entry.isIntersecting), // hide bullets if hero is visible
      { threshold: 0.1 },
    );
    if (hero) heroObserver.observe(hero);

    // Observer for all sections to track which bullet is active
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.25 }, // trigger when 25% of section visible
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

  if (!showBullets) return null; // hide bullets while hero visible

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
            bg={activeSection === sec.id ? "green.800" : "gray.400"} // active guidance color
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
