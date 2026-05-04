import type { Metadata } from "next";
import { Providers } from "./providers";
import ConditionalLayout from "../components/ConditionalLayout";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

export const metadata: Metadata = {
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
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </Providers>
      </body>
    </html>
  );
}
