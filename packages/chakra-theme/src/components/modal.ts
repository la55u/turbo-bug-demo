import { ComponentStyleConfig } from "../theme.types";

const modalStyle: ComponentStyleConfig = {
  baseStyle: {
    dialog: { borderRadius: "base" },
    footer: { gap: 2 },
    header: { fontSize: ["lg", "xl", "2xl"] },
    overlay: { bg: "rgba(18, 39, 77, 0.7)", backdropFilter: "blur(5px)" },
    closeButton: { borderRadius: 9999 },
  },
  defaultProps: {
    size: "lg",
  },
};

export default modalStyle;
