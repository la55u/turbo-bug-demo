import { components } from "./components";
import { semanticTokens } from "./semantic-tokens";
import { styles } from "./styles";

export const theme = {
  semanticTokens,
  direction: "ltr",
  components,
  styles,
};

export type Theme = typeof theme;

export default theme;
