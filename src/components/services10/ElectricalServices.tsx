"use client";

import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const darkGreen = "#0B5D3B";
const deepGray = "#2D2D2D";

const services = [
  {
    title: "Electrical Wiring & Installation",
    image: "/basservice/1.jpg",
    primary:
      "We provide complete electrical wiring solutions for residential, commercial, and industrial projects.",
    secondary:
      "From initial design and installation to testing and commissioning, our team ensures safe, efficient, and compliant electrical systems that meet industry standards.",
  },
  {
    title: "Control Panel Supply & Installation",
    image: "/basservice/2.jpg",
    primary:
      "We design, supply, and install customized electrical control panels to suit different project requirements.",
    secondary:
      "Our panels are built with high-quality components to ensure durability, safety, and seamless integration with building automation systems.",
  },
  {
    title: "Building Automation System (BAS)",
    image: "/basservice/3.jpg",
    primary:
      "We specialize in the supply, installation, and integration of Building Automation Systems (BAS) to improve building efficiency, safety, and comfort.",
    secondary:
      "Our BAS solutions enable centralized monitoring and control of HVAC, lighting, energy management, and security systems for seamless operation and reduced energy costs.",
  },
  {
    title: "Testing, Commissioning & Maintenance",
    image: "/basservice/4.jpg",
    primary:
      "Beyond installation, we provide thorough testing and commissioning services to ensure systems function at optimum performance.",
    secondary:
      "We also offer preventive and corrective maintenance packages to extend equipment lifespan and minimize operational downtime.",
  },
  {
    title: "Energy Efficiency & Smart Building Solutions",
    image: "/basservice/5.jpg",
    primary:
      "As part of our commitment to sustainability, we deliver energy-saving solutions including automation and energy monitoring systems.",
    secondary:
      "Our optimized control strategies help clients reduce operational costs while supporting greener and more efficient building operations.",
  },
];

export default function ElectricalServices() {
  return (
    <Box bg="white" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      {/* SECTION HEADER */}
      <Box maxW="1200px" mx="auto" mb={28}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color={darkGreen}
          textAlign="center"
        >
          Our Services
        </Heading>
      </Box>

      {/* SERVICES */}
      <Box maxW="1200px" mx="auto">
        {services.map((service, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <Flex
              key={service.title}
              direction={{ base: "column", md: isImageLeft ? "row" : "row-reverse" }}
              align="center"
              gap={{ base: 10, md: 20 }}
              mb={24}
            >
              {/* IMAGE BLOCK */}
              <MotionBox
                flex="1"
                h={{ base: "260px", md: "360px" }} // ✅ SAME HEIGHT FOR ALL IMAGES
                border="1px solid"
                borderColor="gray.300"
                overflow="hidden"
                initial={{
                  opacity: 0,
                  x: isImageLeft ? -80 : 80,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  w="100%"
                  h="100%"          // ✅ FILL CONTAINER
                  objectFit="cover" // ✅ CROPS EVENLY
                />
              </MotionBox>
              
              {/* TEXT BLOCK */}
              <Box flex="1">
                {/* TITLE */}
                <MotionBox
                  initial={{
                    opacity: 0,
                    x: isImageLeft ? 80 : -80,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    color={deepGray}
                    mb={4}
                  >
                    {service.title}
                  </Heading>
                </MotionBox>

                {/* PRIMARY DESCRIPTION */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <Text fontSize="md" color="gray.700" mb={3} lineHeight="1.8">
                    {service.primary}
                  </Text>
                </MotionBox>

                {/* SECONDARY DESCRIPTION */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  <Text fontSize="sm" color="gray.600" lineHeight="1.8">
                    {service.secondary}
                  </Text>
                </MotionBox>
              </Box>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
}
