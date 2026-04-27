import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "#2E7D32" },
        },
      },
      fonts: {
        heading: {
          value: "var(--font-jakarta), sans-serif",
        },
        body: {
          value: "var(--font-inter), sans-serif",
        },
      },
    },
  },
});

export default system;