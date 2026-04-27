"use client";

import { VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "our-story", label: "Our Story" },
  { id: "company-overview", label: "Company Overview" },
  { id: "about-subsi", label: "Subsidiaries" },
  { id: "core-values", label: "Core Values" },
  { id: "about-specialties", label: "Specialities" },
  { id: "backtop", label: "Back" },
];

export default function ScrollBullets2() {
  const [activeSection, setActiveSection] = useState("");

  const [hovered, setHovered] = useState<string | null>(null);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <VStack
      position="fixed"
      top="50%"
      right="2rem"
      transform="translateY(-50%)"
      gap={4}
      zIndex={9999}
    >
      {sections.map((sec) => (
        <Box
          key={sec.id}
          position="relative"
          cursor="pointer"
          onMouseEnter={() => setHovered(sec.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleScroll(sec.id)}
        >
          {/* BULLET */}
          <Box
            w="10px"
            h="10px"
            borderRadius="full"
            bg={activeSection === sec.id ? "#1B4D2E" : "gray.400"}
            transform={activeSection === sec.id ? "scale(1.4)" : "scale(1)"}
            transition="all 0.25s ease"
            boxShadow={
              activeSection === sec.id
                ? "0 0 10px rgba(27, 77, 46, 0.6)"
                : "none"
            }
          />

          {/* TOOLTIP */}
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
              borderRadius="md"
              whiteSpace="nowrap"
            >
              {sec.label}

              {/* arrow */}
              <Box
                position="absolute"
                right="-4px"
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
