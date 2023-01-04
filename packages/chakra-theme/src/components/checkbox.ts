import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
);

const baseStyleControl = defineStyle({
  bg: "white",
  borderColor: "gray.400",
  _checked: {},
});

const baseStyleContainer = defineStyle({
  _disabled: { cursor: "not-allowed" },
});

const baseStyleLabel = defineStyle({
  userSelect: "none",
  fontWeight: "medium",
  _disabled: { opacity: 0.4 },
});

const baseStyleIcon = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal",
});

const baseStyle = definePartsStyle({
  icon: baseStyleIcon,
  container: baseStyleContainer,
  control: baseStyleControl,
  label: baseStyleLabel,
});

const variants = {
  blue: defineStyle({
    label: {
      fontSize: "sm",
      fontWeight: "500",
      pl: 1,
      w: "full",
      _checked: {
        color: "blue.600",
      },
    },
    control: {
      h: "18px",
      w: "18px",
      border: "2px solid",
      borderRadius: "3px",
      borderColor: "gray.500",
      bg: "white",
      color: "white",
      _checked: {
        bg: "blue.600",
        borderColor: "blue.600",
      },
    },
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "blue",
  },
});
