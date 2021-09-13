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
  }
}
