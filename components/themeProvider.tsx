import React, { FC } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useAppContext } from "../context/contextProvider";

interface AppThemeProviderProps {}

const darkTheme: DefaultTheme = {
  colors: {
    blue: "#5AC1F4",
    yellow: "#FCD406",
    purple: "#BB7DFF",
    red: "#FE7171",
    black: "#000",
    white: "#fff",
  },
  fontFamily: {
    salsa: "Salsa BT",
    lato: "Lato",
  },
};

const lightTheme: DefaultTheme = {
  colors: {
    blue: "#5AC1F4",
    yellow: "#FCD406",
    purple: "#BB7DFF",
    red: "#FE7171",
    black: "#fff",
    white: "#000",
  },
  fontFamily: {
    salsa: "Salsa BT",
    lato: "Lato",
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
