"use client";

import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function ContactMap() {
  return (
    <MotionBox
      px={{ base: 6, md: 20 }}
      py={16}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Heading */}
      <MotionHeading
        mb={8}
        fontSize={{ base: "2xl", md: "3xl" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        fontWeight={"bold"}
        transition={{ duration: 0.6, delay: 0.2 }}
        color="#163F2D"
      >
        Headquarters
      </MotionHeading>

      {/* Map Card */}
      <MotionBox
        w="full"
        h={{ base: "300px", md: "500px" }}
        bg="white"
        borderRadius="2xl"
        overflow="hidden"
        shadow="md"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.39980962581!2d101.80679947474289!3d2.9864152969896534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11143f3445b055b%3A0x4541c22ac84ade2b!2sMyCES%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1766379271547!5m2!1sen!2smy"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MotionBox>
    </MotionBox>
  );
}
