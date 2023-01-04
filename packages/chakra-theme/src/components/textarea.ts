import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { inputTheme } from "./input";

const baseStyle = defineStyle({
  ...inputTheme.baseStyle,
});

const sizes = {
  sm: inputTheme.sizes?.sm.field ?? {},
  md: inputTheme.sizes?.md.field ?? {},
  lg: inputTheme.sizes?.lg.field ?? {},
};

const variants = {
  white: defineStyle((props) => inputTheme.variants?.white.field ?? {}),
  flushed: defineStyle((props) => inputTheme.variants?.flushed.field ?? {}),
  gray: defineStyle((props) => inputTheme.variants?.gray.field ?? {}),
};

export const textareaTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: inputTheme.defaultProps?.size,
    variant: inputTheme.defaultProps?.variant,
  },
});
