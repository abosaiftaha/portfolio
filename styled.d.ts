import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blue: string;
      yellow: string;
      purple: string;
      red: string;
      white: string;
      black: string;
    };
    fontFamily: {
      salsa: string;
      lato: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      tiny: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
    };
    screens: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    spacing: {
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
      "6": string;
    };
  }
}
