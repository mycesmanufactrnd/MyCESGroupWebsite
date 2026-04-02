"use client";

import { Box, Grid, Image, Heading, Text, Flex, Link } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export default function OfficesContactDetails() {
  return (
    <Box bg="white" px={{ base: 6, md: 20 }} py={20}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 12, md: 20 }}
        alignItems="start"
      >
        {/* ================= LEFT COLUMN ================= */}
        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Feature Image */}
          <MotionImage
            src="/contact/myces.jpeg"
            alt="MyCES Headquarters"
            borderRadius="lg"
            mb={8}
            objectFit="cover"
            w="100%"
            h={{ base: "320px", md: "350px" }}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Header */}
          <Flex align="center" gap={3} mb={6}>
            <Box p={3} bg="gray.100" borderRadius="md" color="#0F2A1D">
              <FaMapMarkerAlt />
            </Box>
            <Heading fontSize="sm" letterSpacing="widest" fontWeight="bold">
              OUR LOCATIONS
            </Heading>
          </Flex>

          {/* Address Content */}
          <Text fontSize="md" color="gray.700" lineHeight="1.9" mb={6}>
            <strong>MyCES Sdn Bhd Location:</strong>
            <br />
            20-1, Jalan Damai Mewah 1,
            <br />
            Taman Damai Mewah,
            <br />
            43000 Kajang,
            <br />
            Selangor, Malaysia
          </Text>
        </MotionBox>

        {/* ================= RIGHT COLUMN ================= */}
        <MotionBox
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Feature Image */}
          <MotionImage
            src="/contact/2.jpg"
            alt="MyCES Team"
            borderRadius="lg"
            mb={8}
            objectFit="cover"
            w="100%"
            h={{ base: "320px", md: "350px" }}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Header */}
          <Flex align="center" gap={3} mb={6}>
            <Box p={3} bg="gray.100" borderRadius="md" color="#0F2A1D">
              <FaPhoneAlt />
            </Box>
            <Heading fontSize="sm" letterSpacing="widest" fontWeight="bold">
              CONTACT DETAILS
            </Heading>
          </Flex>

          {/* Contact Info */}
          <Text fontSize="md" color="gray.700" lineHeight="1.9" mb={4}>
            <strong>Email:</strong>{" "}
            <Link
              href="mailto:admin@mycesgroup.com"
              color="#0F2A1D"
              fontWeight="medium"
            >
              admin@mycesgroup.com
            </Link>
          </Text>

          <Text fontSize="md" color="gray.700" lineHeight="1.9" mb={4}>
            <strong>Phone:</strong>{" "}
            <Link href="tel:+60387255811" color="#0F2A1D" fontWeight="medium">
              (+60) 3-8725 5811
            </Link>
          </Text>

          <Text fontSize="md" color="gray.700" lineHeight="1.9">
            <strong>Operating Hours:</strong>
            <br />
            Monday – Friday
            <br />
            8:30 AM – 5:30 PM
          </Text>
        </MotionBox>
      </Grid>
    </Box>
  );
}
