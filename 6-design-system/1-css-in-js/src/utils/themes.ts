import { yellow, blue, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: yellow[200],
  primaryHoverColor: yellow[100],
  primaryActiveColor: neutral[100],
  textColorOnPrimary: neutral[600],
  textColor: neutral[500],
  textColorInverted: yellow[100],
  primaryFont: primaryFont,
  secondaryColor: blue[100],
  textColorOnSecondary: neutral[600]
};
