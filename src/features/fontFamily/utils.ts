import { FontFamily } from "./types";

export const fontFamilyStyles = {
  SANS_SERIF: { fontFamily: '"Inter", sans-serif' },
  SERIF: { fontFamily: '"Lora", serif' },
  MONO: { fontFamily: '"Inconsolata", monospace' },
};

export const getFontFamilyText = (fontFamily: FontFamily) => {
  switch (fontFamily) {
    case "SANS_SERIF":
      return "Sans Serif";
    case "SERIF":
      return "Serif";
    case "MONO":
      return "Mono";
    default:
      return "gondrong";
  }
};
