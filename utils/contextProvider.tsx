import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";

interface IAppContext {
  isDark: boolean;
  toggleDark?: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  isDark: true,
};

const AppContext = createContext<IAppContext>(defaultState);

export const ContextWrapper: FC = ({ children }) => {
  const [cookie, setCookies] = useCookies(["isDark", `${defaultState.isDark}`]);

  useEffect(() => {
    if (cookie && !cookie.isDark) {
      return setCookies("isDark", "true");
    }
    setCookies("isDark", cookie.isDark === "true" ? "true" : "false");
  }, []);

  const toggleDark = () => {
    setCookies("isDark", cookie.isDark === "true" ? "false" : "true");
  };

  return (
    <CookiesProvider>
      <AppContext.Provider
        value={{
          isDark: cookie.isDark === "true" ? true : false,
          toggleDark,
        }}
      >
        {children}
      </AppContext.Provider>
    </CookiesProvider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
