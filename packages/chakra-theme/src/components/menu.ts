import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys,
);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {},
  list: {
    borderRadius: "xl",
    shadow: "lg",
  },
  item: {
    fontWeight: "medium",
    _hover: { bg: "blue.200" },
    _focus: { bg: "blue.200" },
  },
  groupTitle: {},
  command: {},
  divider: {},
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
