"use client";

import { Box, Grid, Heading, Text, Flex, Link, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  cta?: string;
  link?: string; // ✅ added
  reverse?: boolean;
}

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function ServicesSection() {
  const services = [
    {
      title: "Electronic Components & Tools Supply",
      description:
        "We specialize in supplying high-quality electronic components and tools for education and industry, including microcontrollers, sensors, and prototyping tools. Our products support students, educators, and professionals in fostering innovation and practical learning.",
      image: "/services/electronic_supply.jpg",
      cta: "View More",
      link: "/electronic-supply",
    },
    {
      title: "Coding and Robotic Class",
      description:
        "We offer hands-on STEM-based training in coding and robotics using platforms like Arduino, Raspberry Pi, and Micro:bit[cite: 1141]. These courses help students develop essential problem-solving and engineering skills for future careers in science and technology.",
      image: "/services/robotics_class.jpg",
      cta: "View More",
      link: "/coding-robotics",
    },
    {
      title: "Training Providers",
      description:
        "Beyond academy services, we serve as a comprehensive training provider across the MyCES Group subsidiaries[cite: 1123, 1131]. We deliver specialized technical modules and vocational training encompassing Biomedical Engineering, Manufacturing, Venture development, and Aircond & Electrical Engineering.",
      image: "/services/group_training.jpg",
      cta: "View More",
      link: "/training-providers",
    },
  ];

  return (
    <Box py={20} px={{ base: 5, md: 20 }} bg="#f6f7f5">
      <Box textAlign="center" mb={120} px={{ base: 5, md: 20 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="800"
          mb={4}
          color="green.800"
          letterGap="0.1em"
        >
          OUR SERVICES
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          maxW="3xl"
          mx="auto"
        >
          At MyCES Academy Sdn. Bhd., we provide hands-on, industry-relevant
          education in engineering and STEM. We focus on bridging the gap
          between classroom learning and real-world application to nurture the
          next generation of future-ready innovators.
        </Text>
      </Box>

      {services.map((service, index) => (
        <ServiceBlock key={index} {...service} reverse={index % 2 !== 0} />
      ))}
    </Box>
  );
}

function ServiceBlock({
  title,
  description,
  image,
  cta,
  link,
  reverse,
}: ServiceProps) {
  const imageVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.2 },
    },
  };

  const contentVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={10}
      alignItems="center"
      mb={20}
      flexDirection={{ base: "column", md: reverse ? "row-reverse" : "row" }}
    >
      {/* Image Block */}
      <MotionBox
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // <-- triggers every time element is 20% visible
        position="relative"
      >
        <Image
          src={image}
          alt={title}
          borderRadius="md"
          objectFit="cover"
          w="100%"
          h={{ base: "200px", md: "350px" }}
        />
      </MotionBox>

      {/* Text Content */}
      <MotionFlex
        direction="column"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // <-- triggers every time element scrolls in
      >
        <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
          {title}
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={6} lineHeight="tall">
          {description}
        </Text>
        {cta && (
          <MotionFlex
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }} // <-- ensures link animation triggers each scroll
          >
            <Link
              href="/linkone"
              display="inline-flex"
              alignItems="center"
              fontWeight="bold"
              color="green.800"
              _hover={{
                transform: "translateX(5px)",
                transition: "0.3s",
                color: "green.900",
              }}
            >
              {cta} <FiArrowRightCircle style={{ marginLeft: "8px" }} />
            </Link>
          </MotionFlex>
        )}
      </MotionFlex>
    </Grid>
  );
}
