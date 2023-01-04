export default {
  baseStyle: {
    px: 4,
    display: "inline-flex",
    alignItems: "center",
    fontWeight: "semibold",
    textTransform: "uppercase",
    fontSize: "sm",
    borderRadius: "base",
  },
  sizes: {
    xs: {
      fontSize: "xs",
      height: "20px",
      px: 2,
    },
    sm: {
      height: "24px",
    },
    md: {
      height: "32px",
    },
  },
  variants: {
    dark: {
      bg: "gray.700",
      color: "white",
    },
    blue: {
      bg: "blue.100",
      color: "blue.600",
    },
    light: {
      bg: "gray.200",
    },
    green: {
      bg: "green.400",
      color: "green.800",
    },
  },
  defaultProps: {
    size: "md",
    variant: "blue",
  },
};
