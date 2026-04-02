"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

/* Motion wrappers */
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

/* Motion variants */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const baselineItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutUs() {
  return (
    <MotionBox
      px={{ base: 6, md: 28 }}
      py={{ base: 20, md: 28 }}
      bg="gray.50"
      boxShadow="0 10px 40px rgba(44, 79, 49, 0.15)"
      border="1px solid rgba(40, 49, 41, 0.1)"
      borderColor="gray.200"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <MotionHeading
        variants={baselineItem}
        color="#2C4F31"
        mb={6}
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="extrabold"
      >
        MyCES Group
      </MotionHeading>

      <MotionText
        variants={baselineItem}
        fontSize={{ base: "md", md: "lg" }}
        mb={12}
        color="gray.700"
        lineHeight="1.8"
        maxW={{ base: "100%", md: "600px" }}
      >
        Founded in 2015, MyCES Group is a leader in engineering, manufacturing,
        and technology solutions. We are committed to innovation,
        sustainability, and operational excellence, delivering top-tier results
        across multiple industries while supporting the evolving needs of our
        clients.
      </MotionText>

      {/* Enhanced Animated Button */}
      <MotionButton
        as="a"
        bg="transparent"
        color="#2C4F31"
        px={{ base: 6, md: 10 }}
        py={{ base: 4, md: 5 }}
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="bold"
        position="relative"
        overflow="hidden"
        cursor="pointer"
        className="see-more-btn"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <span className="btn-text">
          See More
          <span className="arrow"> →</span>
        </span>

        <Box className="bg-fill" />
        <Box className="glow-border" />
        <Box className="shine" />
        <Box className="ripple" />
      </MotionButton>

      {/* Enhanced Styles */}
      <style jsx>{`
        .see-more-btn {
          --btn-color: #2c4f31;
          --btn-light: #3e6b45;

          position: relative;
          border-radius: 10px;
          border: 1px solid rgba(44, 79, 49, 0.2);
          transition: all 0.3s ease;
          z-index: 1;
        }

        /* TEXT + ICON */
        .btn-text {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          z-index: 2;
        }

        .arrow {
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
        }

        .see-more-btn:hover .arrow {
          opacity: 1;
          transform: translateX(4px);
        }

        /* BACKGROUND FILL */
        .bg-fill {
          position: absolute;
          inset: 0;
          height: 0%;
          background: linear-gradient(135deg, #2c4f31, #3e6b45);
          z-index: -1;
          transition: height 0.35s ease;
        }

        .see-more-btn:hover .bg-fill {
          height: 100%;
        }

        /* TEXT COLOR CHANGE */
        .see-more-btn:hover {
          color: white;
        }

        /* ✨ GLOW BORDER */
        .glow-border {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          padding: 1px;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(0, 255, 150, 0.6),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .see-more-btn:hover .glow-border {
          opacity: 1;
          animation: glowMove 2s linear infinite;
        }

        @keyframes glowMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        /* SHINE SWEEP */
        .shine {
          position: absolute;
          top: 0;
          left: -120%;
          width: 80%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          transition: left 0.6s ease;
          z-index: 1;
        }

        .see-more-btn:hover .shine {
          left: 120%;
        }

        /* 💥 IMPROVED RIPPLE */
        .ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
        }

        .see-more-btn:active .ripple {
          animation: rippleEffect 0.5s ease-out;
        }

        @keyframes rippleEffect {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(18);
            opacity: 0;
          }
        }

        /* Animated underline */
        .underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 2px;
          width: 0%;
          background: linear-gradient(
            90deg,
            transparent,
            var(--btn-color),
            #00cc66,
            var(--btn-color),
            transparent
          );
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }

        .see-more-btn:hover .underline {
          width: 80%;
        }

        /* Enhanced shine effect */
        .shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          z-index: 1;
        }

        .see-more-btn:hover .shine {
          left: 100%;
        }

        /* Ripple effect */
        .ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background: rgba(44, 79, 49, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition:
            transform 0.4s ease-out,
            opacity 0.3s ease-out;
          pointer-events: none;
          z-index: 2;
          opacity: 0;
        }

        .see-more-btn:active .ripple {
          transform: translate(-50%, -50%) scale(20);
          opacity: 1;
          transition:
            transform 0s,
            opacity 0.2s;
        }

        /* Floating particles */
        .particles {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 2;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: var(--btn-color);
          border-radius: 50%;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .see-more-btn:hover .particle {
          animation: floatParticle 0.6s ease-out forwards;
        }

        /* Individual particle animations */
        .particle-0 {
          top: 0;
          left: 50%;
          animation-delay: 0s;
        }
        .particle-1 {
          top: 20%;
          right: 0;
          animation-delay: 0.05s;
        }
        .particle-2 {
          bottom: 20%;
          right: 0;
          animation-delay: 0.1s;
        }
        .particle-3 {
          bottom: 0;
          left: 50%;
          animation-delay: 0.15s;
        }
        .particle-4 {
          bottom: 20%;
          left: 0;
          animation-delay: 0.2s;
        }
        .particle-5 {
          top: 20%;
          left: 0;
          animation-delay: 0.25s;
        }

        @keyframes floatParticle {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }
          20% {
            opacity: 0.8;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx, 0), var(--ty, 0)) scale(0);
          }
        }

        /* Set different directions for each particle */
        .particle-0 {
          --tx: 0px;
          --ty: -20px;
        }
        .particle-1 {
          --tx: 15px;
          --ty: -10px;
        }
        .particle-2 {
          --tx: 15px;
          --ty: 10px;
        }
        .particle-3 {
          --tx: 0px;
          --ty: 20px;
        }
        .particle-4 {
          --tx: -15px;
          --ty: 10px;
        }
        .particle-5 {
          --tx: -15px;
          --ty: -10px;
        }

        /* Optional: Add border glow animation on hover */
        @keyframes borderGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(44, 79, 49, 0.4);
          }
          100% {
            box-shadow: 0 0 0 8px rgba(44, 79, 49, 0);
          }
        }

        .see-more-btn:hover {
          animation: borderGlow 0.8s ease-out;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .see-more-btn {
            border-radius: 6px;
          }

          .underline {
            height: 2px;
          }

          .particle {
            width: 2px;
            height: 2px;
          }
        }

        /* Optional: Add a subtle pulse to the button text on hover */
        .see-more-btn:hover {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        /* Loading state (optional) */
        .see-more-btn.loading {
          pointer-events: none;
          opacity: 0.7;
        }

        .see-more-btn.loading::after {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
          border: 2px solid #fff;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: translateY(-50%) rotate(360deg);
          }
        }
      `}</style>
    </MotionBox>
  );
}
