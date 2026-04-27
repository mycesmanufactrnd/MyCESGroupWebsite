"use client";

import { VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about-us", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "social-proof", label: "Social Proof" },
  { id: "backtop", label: "Back" },
];

export default function ScrollBullets() {
  const [activeSection, setActiveSection] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestMatch = { id: "", ratio: 0 };

        entries.forEach((entry) => {
          if (entry.intersectionRatio > bestMatch.ratio) {
            bestMatch = {
              id: entry.target.id,
              ratio: entry.intersectionRatio,
            };
          }
        });

        if (bestMatch.id) {
          setActiveSection(bestMatch.id);
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
        rootMargin: "-20% 0px -40% 0px",
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
      right="1.5rem"
      transform="translateY(-50%)"
      gap={4}
      zIndex={9999}
    >
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;

        return (
          <Box
            key={sec.id}
            position="relative"
            cursor="pointer"
            onMouseEnter={() => setHovered(sec.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleScroll(sec.id)}
          >
            {/* BULLET (MATCH ScrollBullets2 THEME) */}
            <Box
              w={isActive ? "12px" : "9px"}
              h={isActive ? "12px" : "9px"}
              borderRadius="full"
              bg={isActive ? "#1B4D2E" : "gray.400"}
              transform={isActive ? "scale(1.25)" : "scale(1)"}
              transition="all 0.25s ease"
              boxShadow={isActive ? "0 0 10px rgba(27, 77, 46, 0.6)" : "none"}
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
                boxShadow="md"
              >
                {sec.label}

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
        );
      })}
    </VStack>
  );
}
