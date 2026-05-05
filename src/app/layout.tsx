import type { Metadata } from "next";
import { Providers } from "./providers";
import ConditionalLayout from "../components/ConditionalLayout";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "MyCES Group",
  description: "Comprehensive Energy Management Services",
  applicationName: "MyCES Group",
  authors: [
    { name: "Fatimah", url: "https://www.linkedin.com/in/fatimah6867/" },
    {
      name: "MyCES Manufacturing Sdn Bhd",
      url: "https://www.live.mycesgroup.com/businessManu/manu",
    },
  ],
  creator: "Fatimah",
  publisher: "MyCES Manufacturing Sdn Bhd",
  icons: {
    icon: "/logo.png",
  },
  keywords: [
    "energy management",
    "sustainability",
    "energy efficiency",
    "energy audit",
    "energy optimization",
    "energy monitoring",
    "energy forecasting",
    "energy reporting",
    "energy management software",
    "energy management system",
    "energy management consulting",
    "energy management services",
    "energy management solutions",
    "energy management tools",
    "energy management platform",
    "energy management software",
    "energy management consulting",
    "energy management services",
    "energy management solutions",
    "energy management tools",
    "energy management platform",
    "energy management software",
    "energy reporting",
    "energy management software",
    "energy management system",
    "energy management consulting",
    "energy management services",
    "energy management solutions",
    "energy management tools",
    "energy management platform",
    "engineering company",
    "engineering services",
    "engineering solutions",
    "manufacturing company",
    "manufacturing services",
    "manufacturing solutions",
    "system development",
    "system integration",
    "custom system development",
    "biomedical engineering",
    "biomedical solutions",
    "biomedical equipment",
  ],
  verification: {
    google: "X139nlCjpaps_HrnaeOIxBZjcdCc95kmygkEn9_4VC4",
  },
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <ConditionalLayout>{children}</ConditionalLayout>
        </Providers>
      </body>
    </html>
  );
}
