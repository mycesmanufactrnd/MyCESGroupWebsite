"use client";

import {
  Box,
  Container,
  Grid,
  Text,
  Stack,
  Flex,
  Button,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const stats = [
  { label: "Projects", value: "130+" },
  { label: "Sectors", value: "4" },
  { label: "Coverage", value: "Malaysia" },
];

type ServiceType = "ENERGY AUDIT";

const portfolioData: Record<
  ServiceType,
  { description: string; sectors: Record<string, string[]> }
> = {
  "ENERGY AUDIT": {
    description:
      "MYCES provides nationwide Energy Audit services across healthcare, commercial, industrial, and education sectors, delivering data-driven insights to improve efficiency and ensure EMEER compliance.",

    sectors: {
      Healthcare: [
        "Hospital Pusrawi Sdn Bhd",
        "KPJ Selangor Specialist Hospital",
        "KPJ Seremban Specialist Hospital",
        "SALAM Specialist Hospital Senawang",
        "SALAM Specialist Hospital Kuala Terengganu",
        "KPJ Perdana Specialist Hospital",
        "Kuantan Medical Centre",
        "Kuala Terengganu Specialist Hospital",
        "KPJ Puteri Specialist Hospital",
        "KPJ Penang Specialist Hospital",
        "KPJ Kajang Specialist Hospital",
        "Columbia Asia Bukit Rimau",
        "Columbia Asia Puchong",
        "Columbia Asia Klang",
        "Columbia Asia Tebrau",
        "University Malaya Specialist Centre",
        "Hospital Gua Musang",
        "Hospital Machang",
        "Hospital Tanah Merah",
        "Hospital Jasin",
        "Hospital Alor Gajah",
        "Hospital Enche Besar Hajjah Kalsom",
        "Hospital Tangkak",
        "Hospital Kuala Lumpur",
        "Hospital Tuanku Jaafar",
        "Hospital Jempol",
        "Gleneagles Kota Kinabalu",
        "Klinik Kesihatan Putrajaya Presint 18",
        "Hospital Kemaman",
        "Hospital Dungun",
        "Hospital Setiu",
        "Hospital Besut",
        "Hospital Rehabilitasi Cheras",
        "Klinik Kesihatan Tengkera",
        "National Institute of Health",
        "KPJ Perlis Specialist Hospital",
        "Nilai Medical Centre",
        "Hospital Sultanah Nora Ismail",
        "Hospital Rembau",
        "KPJ Ampang Puteri",
        "KPJ Pahang",
        "KPJ Maharani",
        "KPJ Pasir Gudang",
        "KPJ Batu Pahat",
      ],

      Commercial: [
        "Sime Darby Brunsfield Tower",
        "Pharmaniaga Logistics Sdn Bhd",
        "Pejabat Daerah Hulu Langat",
        "Pejabat Daerah Sepang",
        "Pejabat Daerah Klang",
        "Pejabat Daerah Gombak",
        "Pejabat Daerah Hulu Selangor",
        "Pejabat Daerah Kuala Langat",
        "Pejabat Daerah Kuala Selangor",
        "Pejabat Daerah Sabak Bernam",
        "Pejabat Daerah Petaling",
        "Pejabat Setiausaha Kerajaan Terengganu",
        "Jabatan Peguam Negara",
        "Kementerian Kerja Raya",
        "Kementerian Pembangunan Wanita dan Keluarga",
        "Dewan Bahasa dan Pustaka",
        "Suruhanjaya Pencegahan Rasuah Malaysia",
        "Kementerian Pengangkutan",
        "Kompleks Kerajaan Parcel B",
        "Kompleks Kerajaan Parcel D",
        "Kompleks Kerajaan Parcel F",
        "Kementerian Pembangunan Usahawan",
        "PERHILITAN",
        "FRIM",
        "JPSM",
        "Banyan Tree Residences",
        "Kompleks KDN Indera Mahkota",
        "Kompleks KDN Pulau Tioman",
        "Johor Bahru Sentral",
        "Bangunan Kastam dan Akauntan Negara",
        "Bangunan Angkasapuri",
        "Securities Commission",
        "Mahkamah Kuala Lumpur",
        "POS Malaysia HQ",
        "Pusat Mel Nasional Shah Alam",
        "POS Aviation Cargo Complex",
        "POS Aviation Inflight Kitchen",
      ],

      Industrial: [
        "PETRONAS Research Sdn Bhd",
        "Loji Air Sungai Harmoni",
        "Stesen Pam Sungai Harmoni",
        "Sibu Water Board",
        "Kayaku Safety Systems Malaysia",
        "Mycron Steel CRC",
        "Spirit Aerosystems Malaysia",
        "KJM Aluminium Can",
        "Mewaholeo Industries",
        "WD Media",
        "Pascorp Paper Industries",
        "CCM Chemicals",
        "Kerry Penang",
        "Kerry Tampoi",
        "Kerry Plentong",
        "MSM Prai",
        "IOI Palm Oil Mill",
        "Pure Circle Sdn Bhd",
        "FGV Kernel Products",
        "Idemitsu SM Malaysia",
        "Sipro Plastic Industries",
        "Ramatex Textile",
        "Super Food Specialist",
        "MSM Sugar Refinery",
        "HGST Sdn Bhd",
        "Kaneka Malaysia",
        "HICOM Teck See Manufacturing",
        "FGV IFFCO",
        "Kayaku Safety Systems M",
      ],

      Education: [
        "TATI University College",
        "UiTM Seremban",
        "UiTM Puncak Alam",
        "UiTM Rembau",
        "UiTM Jengka",
        "UiTM Raub",
        "UiTM Dungun",
        "UiTM Alor Gajah",
        "UiTM Kuala Pilah",
        "UiTM Segamat",
        "UiTM Shah Alam",
        "Universiti Sains Malaysia",
        "ILD UiTM",
        "Universiti Tun Hussein Onn Malaysia",
      ],
    },
  },
};

export default function DescriptionSubPortfolio({
  service = "ENERGY AUDIT" as ServiceType,
}) {
  const data = portfolioData[service];
  const [activeTab, setActiveTab] = useState("Healthcare");

  return (
    <Container maxW="container.xl" py={12}>
      <Grid templateColumns={{ base: "1fr", md: "70% 30%" }} gap={10}>
        <Stack gap={10}>
          {/* Description */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={3}>
              {service}
            </Text>
            <Text color="gray.600" fontSize="sm" lineHeight="tall">
              {data.description}
            </Text>
          </Box>

          {/* Stats */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            {stats.map((stat, i) => (
              <MotionBox
                key={i}
                p={5}
                border="1px solid #eee"
                borderRadius="lg"
                textAlign="center"
                whileHover={{ y: -4 }}
              >
                <Text fontSize="xl" fontWeight="bold" color="green.600">
                  {stat.value}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {stat.label}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Tabs */}
          <Box>
            <Flex gap={2} wrap="wrap">
              {Object.keys(data.sectors).map((sector) => (
                <Button
                  key={sector}
                  size="sm"
                  onClick={() => setActiveTab(sector)}
                  colorScheme={activeTab === sector ? "green" : "gray"}
                  variant={activeTab === sector ? "solid" : "ghost"}
                  borderRadius="half"
                >
                  {sector}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* Cards */}
          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} gap={4}>
            {data.sectors[activeTab].map((client, i) => (
              <MotionBox
                key={i}
                p={4}
                borderRadius="md"
                border="1px solid #eee"
                whileHover={{ scale: 1.02 }}
              >
                <Text fontSize="sm" fontWeight="medium">
                  {client}
                </Text>

                <Badge mt={2} size="sm" colorScheme="green">
                  Energy Audit
                </Badge>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Stack>

        {/* Sidebar */}
        <Box position={{ md: "sticky" }} top={20}>
          <Text fontWeight="bold" fontSize="md" mb={4}>
            Overview
          </Text>

          <Stack gap={4} fontSize="sm">
            <Box>
              <Text color="gray.500">Category</Text>
              <Text>Energy Audit</Text>
            </Box>

            <Box>
              <Text color="gray.500">Coverage</Text>
              <Text>Malaysia</Text>
            </Box>

            <Box>
              <Text color="gray.500">Compliance</Text>
              <Text>EMEER</Text>
            </Box>

            <Box>
              <Text color="gray.500">Highlights</Text>
              <Text>130+ Projects</Text>
              <Text>4 Sectors</Text>
              <Text>Nationwide</Text>
              <Text>HVAC & Chiller Systems</Text>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Container>
  );
}
