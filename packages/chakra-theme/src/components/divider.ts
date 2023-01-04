export default {
  variants: {
    solid: {
      opacity: 1,
      borderStyle: "solid",
      borderColor: "gray.200",
    },
    dashed: {
      opacity: 1,
      borderStyle: "dashed",
      borderColor: "#BEC3CE",
    },
  },
  defaultProps: {
    variant: "dashed",
  },
};
