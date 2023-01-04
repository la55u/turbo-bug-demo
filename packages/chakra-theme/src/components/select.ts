import buttonTheme from "./button";
import { inputTheme } from "./input";

const variantsFromButton = Object.keys(buttonTheme.variants).reduce((acc, variant, i, arr) => {
  //@ts-expect-error
  return Object.assign(acc, { [variant]: { field: buttonTheme.variants[variant] } });
}, {});

const selectTheme = {
  baseStyle: {
    field: {
      cursor: "pointer",
      fontWeight: "medium",
    },
  },

  sizes: {
    sm: {
      field: {
        ...(inputTheme.sizes?.sm.field ?? {}),
      },
    },
    md: {
      field: {
        ...(inputTheme.sizes?.md.field ?? {}),
      },
    },
    lg: {
      field: {
        ...(inputTheme.sizes?.lg.field ?? {}),
      },
    },
  },

  variants: {
    white: {
      field: {
        bg: "white",
        border: "1px solid",
        borderColor: "gray.200",
      },
    },
    gray: {
      field: {
        bg: "white",
        border: "1px solid",
        borderColor: "gray.300",
        color: "gray.700",
        px: 3,
        _hover: { borderColor: "gray.100" },
        _focus: { borderColor: "gray.200" },
      },
    },
    ...variantsFromButton,
  },

  defaultProps: {
    size: "md",
    variant: "white",
  },
};

export default selectTheme;
