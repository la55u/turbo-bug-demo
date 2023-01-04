import { formAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  requiredIndicator: { color: "red.800" },
  helperText: { color: "gray.500", fontSize: "xs" },
});

export const formControlTheme = defineMultiStyleConfig({
  baseStyle,
});
