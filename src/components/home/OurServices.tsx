"use client";

import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

interface Service {
  title: string;
  image: string;
  highlight: boolean;
  href: string;
}

const services: Service[] = [
  {
    title: "Digital System",
    image: "/home/7.jpg",
    highlight: false,
    href: "/services/energy-audit/digitalsystem",
  },
  {
    title: "Energy Audit",
    image: "/home/8.jpg",
    highlight: false,
    href: "/services/energy-audit",
  },
  {
    title: "Equipment Rental",
    image: "/erservice/new5er.jpg",
    highlight: true,
    href: "/services2/equipmentrental",
  },
  {
    title: "Measurement and Verifications",
    image: "/home/10.jpg",
    highlight: true,
    href: "/services3/measurement",
  },
  {
    title: "Agriculture",
    image: "/home/11.jpg",
    highlight: false,
    href: "/services4/agriculture",
  },
  {
    title: "Reem Consultancy",
    image: "/home/12.jpg",
    highlight: false,
    href: "/services5/reemconsultancy",
  },
  {
    title: "Geological Survey",
    image: "/home/home2/18.jpg",
    highlight: false,
    href: "/services6/geologicalsurvey",
  },
  {
    title: "Biomedical",
    image: "/home/14.jpg",
    highlight: false,
    href: "/services8/biomedical",
  },
  {
    title: "Energy Management System Certification",
    image: "/home/15.jpg",
    highlight: false,
    href: "/services7/emscertification",
  },
  {
    title: "Robotic And Coding Class",
    image: "/home/16.jpg",
    highlight: false,
    href: "/services9/robotic",
  },
  {
    title: "Training Provider",
    image: "/home/17.jpg",
    highlight: false,
    href: "/services10/training",
  },
  {
    title: "Electronic Compenents And Tools Supply",
    image: "/home/24.jpg",
    highlight: false,
    href: "/services10/training",
  },
  {
    title: "Building Automation System",
    image: "/home/18.jpg",
    highlight: false,
    href: "/services11/bas",
  },
  {
    title: "Control Panel Supply",
    image: "/home/home2/20new.jpeg",
    highlight: false,
    href: "/services11/bas",
  },
  {
    title: "Electrical Wiring And Installation",
    image: "/home/21.jpg",
    highlight: false,
    href: "/services11/bas",
  },
  {
    title: "Testing, Commissioning And Maintenenace",
    image: "/home/22.jpg",
    highlight: false,
    href: "/services11/bas",
  },
  {
    title: "Energy Efficiency And Smart Building Solutions",
    image: "/home/23.jpg",
    highlight: false,
    href: "/services11/bas",
  },
  {
    title: "Indoor Air Quality (IAQ)",
    image: "/home/19.jpg",
    highlight: false,
    href: "/services16/indoor",
  },
];

export default function OurServices() {
  return (
    <Box
      position="relative"
      px={{ base: 6, md: 20 }}
      py={32}
      overflow="hidden"
      _before={{
        content: `""`,
        position: "absolute",
        inset: 0,
        bgImage: `url("/backgrounds/bg4.jpg")`,
        bgSize: "cover",
        bgPos: "center",
        bgAttachment: { base: "scroll", md: "fixed" },
        zIndex: -2,
      }}
      _after={{
        content: `""`,
        position: "absolute",
        inset: 0,
        bg: "rgba(226, 233, 223, 0.47)",
        zIndex: -1,
      }}
    >
      <Box position="relative" zIndex={0}>
        <Heading
          textAlign="center"
          mb={20}
          color="#375534"
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          Our Services
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          spacing={8}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              style={{ textDecoration: "none" }}
            >
              <MotionBox
                cursor="pointer"
                bg={service.highlight ? "#EAECE6" : "gray.100"}
                borderRadius="2xl"
                p={6}
                minH="300px"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 250, damping: 20 },
                }}
              >
                <VStack spacing={4} align="stretch">
                  <Text
                    fontWeight="semibold"
                    color="gray.800"
                    textAlign="center"
                  >
                    {service.title}
                  </Text>

                  <Box
                    borderRadius="2xl"
                    overflow="hidden"
                    w="100%"
                    h="200px"
                    mt={6}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      transition="transform 0.4s ease"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                </VStack>
              </MotionBox>
            </Link>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
