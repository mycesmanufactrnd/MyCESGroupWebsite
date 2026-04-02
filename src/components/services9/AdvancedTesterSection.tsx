"use client";

import { Box, SimpleGrid, Heading, Text, Flex } from "@chakra-ui/react";
import { easeInOut, motion } from "framer-motion";

const MotionBox = motion(Box);

/* ================= TECHNICAL EQUIPMENT LIST ================= */
const testers = [
  { name: "Electrical Safety Test", model: "Datrend ES601" },
  { name: "Infusion / Syringe Pump Analyzer", model: "Infutest 2000" },
  { name: "Tissue Phantom", model: "CIRS 040GSE" },
  { name: "Digital Tachometer", model: "Extech" },
  { name: "Defibrillator Analyzer", model: "Phase 3" },
  { name: "Haemodialysis Analyzer", model: "IBP HDM97" },
  { name: "Lux Meter", model: "Testo 540" },
  { name: "Radiometer / Photometer Kit", model: "Accumax XRP-3000" },
  { name: "Sound Level Meter", model: "Extech Instrument" },
  { name: "ECG Simulator", model: "Fluke PS420" },
  { name: "Patient Monitor Simulator", model: "Fluke ProSim 8" },
  { name: "Electrosurgical Analyzer", model: "Fluke QA-ES III" },
  { name: "Ventilator Analyzer", model: "Fluke VT650" },
  { name: "NIBP Analyzer", model: "Fluke BP Pump 2" },
  { name: "Pulse Oximeter Tester", model: "Fluke ProSim SPOT Light" },
  { name: "Pressure Gauge Calibrator", model: "DPI 104" },
  { name: "Flow Analyzer", model: "TSI 4040" },
  { name: "Temperature Calibrator", model: "Fluke 724" },
  { name: "Thermal Camera", model: "FLIR E6-XT" },
  { name: "Ultrasound Power Meter", model: "Ohmic UPM-DT-1E" },
  { name: "Infant Incubator Analyzer", model: "Fluke INCU II" },
  { name: "Suction Pump Tester", model: "Fluke IDA-5" },
  { name: "Gas Flow Analyzer", model: "Fluke VT900A" },
  { name: "Electrical Leakage Tester", model: "Rigel 288+" },
  { name: "Biomedical Safety Analyzer", model: "BC Biomedical SA-2000" },
];

/* ================= ANIMATION VARIANTS ================= */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // 50ms waterfall
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function AdvancedTestersSection() {
  return (
    <Box bg="gray.50" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      {/* ===== SECTION HEADER ===== */}
      <Box textAlign="center" maxW="900px" mx="auto" mb={14}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          mb={4}
          color="#0B5D3B"
        >
          List of Advanced Testers
        </Heading>
        <Text color="gray.600" fontSize="md">
          Utilizing industry-leading calibration and diagnostic tools to ensure
          the highest medical safety standards.
        </Text>
      </Box>

      {/* ===== TECHNICAL GRID ===== */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        maxW="1300px"
        mx="auto"
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {testers.map((item, index) => (
            <MotionBox
              key={item.name}
              variants={cardVariants}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              p={6}
              minH="120px"
              transition={{ ease: easeInOut }}
              _hover={{
                bg: "#F1F8F6", // light medical green
                borderColor: "#0B5D3B",
                transform: "translateX(2px)",
              }}
            >
              {/* ITEM NUMBER */}
              <Text
                fontSize="xs"
                fontWeight="bold"
                color="#0B5D3B"
                mb={2}
                fontFamily="mono"
              >
                {String(index + 1).padStart(2, "0")}
              </Text>

              {/* TEST NAME */}
              <Text fontWeight="semibold" fontSize="md" mb={1} color="gray.800">
                {item.name}
              </Text>

              {/* EQUIPMENT MODEL */}
              <Flex gap={2} fontSize="sm" color="gray.600">
                <Text fontWeight="medium">Equipment:</Text>
                <Text fontFamily="mono">{item.model}</Text>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </MotionBox>
    </Box>
  );
}
