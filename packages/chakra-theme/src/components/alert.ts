export default {
  baseStyle: {
    container: { shadow: "xl", borderWidth: "2px", maxW: 450 },
    title: { fontWeight: "semibold" },
    icon: { borderRadius: 9999 },
    description: { fontSize: "sm" },
  },
  variants: {
    error: {
      container: { borderColor: "red.800", background: "red.400" },
      icon: { color: "red.800" },
    },
    success: {
      container: { borderColor: "green.700", background: "green.400" },
      icon: { color: "green.700" },
    },
    info: {
      container: { borderColor: "blue.600", background: "blue.300" },
      icon: { color: "blue.600" },
    },
    warning: {
      container: { borderColor: "yellow.500", background: "yellow.300" },
      icon: { color: "yellow.500" },
    },
  },
};
