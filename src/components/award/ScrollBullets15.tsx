"use client";

import { VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "equipment-hero", label: "Hero" },
  { id: "equipment-feature", label: "Feature" },
  { id: "equipment-carousel", label: "Carousel" },
  { id: "equipment-differentiators", label: "Differentiators" },
  { id: "equipment-process", label: "Process" },
  { id: "extra", label: "Extra" }, // optional placeholder
];

export default function ScrollBullets15() {
  const [activeSection, setActiveSection] = useState("");
  const [showBullets, setShowBullets] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hero = document.getElementById("equipment-hero");

    const heroObserver = new IntersectionObserver(
      ([entry]) => setShowBullets(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (hero) heroObserver.observe(hero);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
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
          w="12px"
          h="12px"
          borderRadius="full"
          bg={activeSection === sec.id ? "green.800" : "gray.400"}
          cursor="pointer"
          _hover={{ bg: "#4D6331" }}
          onClick={() => handleScroll(sec.id)}
          transition="all 0.3s ease"
        />
      ))}
    </VStack>
  );
}
