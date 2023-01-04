export default {
  baseStyle: {
    th: { fontSize: "xs" },
    td: { fontSize: "sm" },
  },
  sizes: {
    sm: {
      td: { py: 2, px: 3 },
      th: { py: 2, px: 3 },
    },
    md: {
      td: { py: 3, px: 4 },
      th: { py: 3, px: 4 },
    },
  },
  variants: {
    primary: {
      th: {
        color: "gray.700",
        bg: "gray.100",
        fontWeight: "bold",
        borderBottom: "1px solid",
        borderBottomColor: "gray.200",
      },
      tr: {
        color: "gray.700",
        fontWeight: "medium",
        width: "100%",
        wordWrap: "break-word",
        _even: {
          background: "gray.50",
        },
        _odd: {
          background: "white",
        },
      },
    },

    secondary: {
      th: {
        background: "gray.100",
        borderBottom: "1px solid",
        borderBottomColor: "gray.200",
        color: "gray.500",
        fontWeight: "semibold",
      },
      tr: {
        background: "gray.100",
        color: "gray.700",
        fontWeight: "medium",
        width: "100%",
        wordWrap: "break-word",
        borderBottom: "1px solid",
        borderBottomColor: "gray.200",
        _last: {
          borderBottom: "none",
        },
      },
    },

    light: {
      th: {
        background: "white",
        color: "gray.500",
        fontWeight: "semibold",
        borderBottom: "1px solid",
        borderBottomColor: "gray.200",
      },
      tr: {
        background: "white",
        color: "gray.700",
        fontWeight: "medium",
        width: "100%",
        wordWrap: "break-word",
        borderBottom: "1px solid",
        borderBottomColor: "gray.200",
        _last: {
          borderBottom: "none",
        },
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
};
