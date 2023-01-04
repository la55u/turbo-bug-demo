import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
  "container",
  "image",
  "icon",
  "body",
  "title",
  "text",
  "badge",
  "actions",
  "number",
  "label",
  "button",
]);

const CTA = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      display: "flex",
      borderRadius: "md",
      gap: [2, 2, 4],
      w: "full",
      p: 4,
      alignItems: "center",
      flexDirection: ["column", "column", "column", "row"],
    },
    image: {
      minW: "36px",
      maxW: ["36px", "48px", "72px"],
      maxH: ["36px", "48px", "72px"],
    },
    icon: {
      bg: "white",
      p: 3,
      shadow: "base",
      boxSize: ["36px", "48px"],
      borderRadius: 9999,
    },
    body: {
      gap: 1,
    },
    title: {
      textAlign: ["center", "start"],
      fontWeight: "semibold",
    },
    text: {
      textAlign: ["center", "start"],
      fontSize: "sm",
    },
    badge: {
      h: "32px",
      color: "white",
      borderRadius: 9999,
      fontWeight: "bold",
      bg: "green.600",
    },
    label: {
      fontWeight: "medium",
    },
    actions: {
      gap: 4,
      ml: [0, "auto"],
      w: ["full", "auto"],
      justifyContent: "space-between",
    },
    button: {},
  },
  sizes: {
    sm: {},
    md: {},
  },
  variants: {
    danger: {
      container: { bg: "red.300" },
      badge: { bg: "red.800" },
      title: { color: "red.800", fontSize: "sm" },
      text: { fontWeight: "semibold", fontSize: "md" },
      icon: { color: "red.800" },
    },
    info: {
      container: { bg: "blue.100" },
      icon: { color: "blue.600" },
    },
    yellow: {
      container: { bg: "yellow.200" },
      icon: { color: "blue.600" },
      title: { color: "blue.600", fontSize: "sm" },
      text: { fontWeight: "semibold", fontSize: "md" },
      badge: { bg: "yellow.500" },
    },
  },
  defaultProps: {
    size: "md",
    variant: "info",
  },
});

export default CTA;
