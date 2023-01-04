export default {
  baseStyle: {
    fontWeight: "semibold",
    borderRadius: "base",
    _hover: {
      _loading: { cursor: "wait" },
      _disabled: { background: "gray.500" },
    },
  },

  sizes: {
    sm: {
      height: "20px",
      px: 2,
    },
    md: {
      height: "32px",
      px: 4,
    },
    lg: {
      height: "48px",
      px: 6,
    },
  },

  variants: {
    primary: {
      background: "blue.600",
      color: "white",
      _hover: { background: "blue.700" },
      _active: { background: "blue.800" },
    },
    primarySubtle: {
      background: "blue.200",
      color: "blue.600",
      _hover: { background: "blue.300" },
      _active: { background: "blue.400" },
    },
    outline: {
      background: "white",
      color: "blue.600",
      border: "1px solid ",
      borderColor: "gray.300",
      _hover: { background: "blue.100" },
      _active: { background: "blue.200" },
    },
    secondary: {
      background: "white",
      color: "blue.600",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: { background: "gray.100" },
      _active: { background: "gray.200" },
    },
    dark: {
      background: "gray.700",
      color: "black",
      _hover: { color: "gray.400" },
      _active: { color: "gray.500" },
    },
    light: {
      background: "white",
      color: "gray.700",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: { background: "gray.100" },
      _active: { background: "gray.200" },
    },
    semiLight: {
      background: "gray.100",
      color: "gray.700",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: { background: "gray.200" },
      _active: { background: "gray.300" },
    },
    transparent: {
      color: "blue.600",
      _hover: { background: "blue.200" },
      _active: { background: "blue.300" },
    },
    nav: {
      background: "transparent",
      borderRadius: "9999px",
      fontWeight: "medium",
      _hover: { background: "gray.200" },
    },
    link: {
      color: "blue.600",
    },
    danger: {
      color: "white",
      background: "red.800",
      _hover: { background: "red.900" },
    },
    dangerSubtle: {
      color: "red.800",
      bg: "red.300",
      _hover: { bg: "red.400" },
      _active: { bg: "red.600" },
    },
    dangerGhost: {
      color: "red.800",
      _hover: { bg: "red.300" },
      _active: { bg: "red.400" },
    },
    dangerSecondary: {
      bg: "white",
      color: "red.800",
      border: "1px solid",
      borderColor: "red.800",
      _hover: { bg: "red.400" },
      _active: { bg: "red.600" },
    },
    success: {
      background: "green.700",
      color: "white",
      _hover: { background: "green.800" },
    },
  },

  defaultProps: {
    variant: "primary",
    colorScheme: "blue",
    size: "md",
  },
};
