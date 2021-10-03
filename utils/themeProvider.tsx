import React, { FC } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useAppContext } from "./contextProvider";

interface AppThemeProviderProps {}

const darkTheme: DefaultTheme = {
  colors: {
    blue: "#5AC1F4",
    yellow: "#FCD406",
    purple: "#BB7DFF",
    red: "#FE7171",
    black: "#1A1818",
    white: "#fff",
    grey: "#6e6e6e",
  },
  fontFamily: {
    salsa: "Salsa BT",
    sora: "Sora",
  },
};

const lightTheme: DefaultTheme = {
  colors: {
    blue: "#5AC1F4",
    yellow: "#FCD406",
    purple: "#BB7DFF",
    red: "#FE7171",
    black: "#d6d6d6",
    white: "#0a0a0a",
    grey: "#6e6e6e",
  },
  fontFamily: {
    salsa: "Salsa BT",
    sora: "Sora",
  },
};

const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const { isDark } = useAppContext();
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
