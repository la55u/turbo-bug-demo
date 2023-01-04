import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
);

const baseStyle = definePartsStyle({
  field: {
    _disabled: {
      opacity: 1,
      bg: "gray.200",
    },
    _readonly: {
      opacity: 1,
      bg: "gray.200",
    },
  },
  addon: {
    fontWeight: "medium",
  },
});

const size = {
  sm: defineStyle({ height: "32px", fontSize: "sm", borderRadius: "base" }),
  md: defineStyle({ height: "36px", fontSize: "sm", borderRadius: "base" }),
  lg: defineStyle({ height: "48px", fontSize: "md", borderRadius: "base" }),
};

const sizes = {
  sm: definePartsStyle({
    field: size.sm,
    addon: size.sm,
  }),
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  }),
  lg: definePartsStyle({
    field: size.lg,
    addon: size.lg,
  }),
};

const variants = {
  white: definePartsStyle({
    field: {
      bg: "white",
      border: "1px solid",
      borderColor: "gray.200",
    },
    addon: {
      bg: "gray.100",
      border: "1px solid",
      borderColor: "gray.200",
    },
  }),
  flushed: definePartsStyle({
    field: {
      borderBottom: "1px solid",
      borderBottomColor: "gray.200",
      borderRadius: 0,
      fontSize: "sm",
      _required: {
        //borderColor: "green.700",
      },
      _hover: { borderBottomColor: "blue.500" },
      _focus: { borderBottomColor: "blue.600" },
    },
  }),

  gray: definePartsStyle({
    field: {
      bg: "gray.100",
      border: "1px solid",
      borderColor: "gray.300",
      color: "gray.700",
      fontWeight: "medium",
      px: 3,
      _placeholder: {
        color: "gray.500",
      },
      _hover: { borderColor: "gray.400" },
      _focus: { borderColor: "gray.500" },
    },
  }),
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle: baseStyle,
  sizes: sizes,
  variants: variants,
  defaultProps: {
    variant: "white",
    size: "md",
  },
});
