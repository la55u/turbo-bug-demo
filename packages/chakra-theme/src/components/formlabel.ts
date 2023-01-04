export default {
  baseStyle: {
    fontWeight: "600",
  },

  sizes: {
    xs: {
      fontSize: "xs",
    },
    sm: {
      fontSize: "sm",
    },
    md: {
      fontSize: "md",
    },
    lg: {
      fontSize: "lg",
    },
  },

  variants: {
    primary: {
      color: "gray.700",
    },
    light: {
      color: "gray.500",
      fontWeight: 500,
    },
  },

  defaultProps: {
    variant: "primary",
    size: "sm",
  },
};
