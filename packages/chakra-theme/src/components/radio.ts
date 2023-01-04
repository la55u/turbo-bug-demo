import { radioAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { checkboxTheme } from "./checkbox";

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
  label: checkboxTheme.baseStyle?.label,
  control: {
    ...checkboxTheme.baseStyle?.control,
    borderRadius: "full",
    _checked: {
      //borderColor: "blue.500",
    },
  },
}));

const sizes = {
  md: definePartsStyle({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" },
  }),
  lg: definePartsStyle({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" },
  }),
  sm: definePartsStyle({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" },
  }),
};

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
});
