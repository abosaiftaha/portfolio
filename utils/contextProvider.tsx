import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAppContext {
  isDark: boolean;
  toggleDark?: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  isDark: true,
};

const AppContext = createContext<IAppContext>(defaultState);

export const ContextWrapper: FC = ({ children }) => {
  const [isDark, setDark] = useState(defaultState.isDark);
  const toggleDark = () => {
    setDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem("theme", "dark");
    console.log(localStorage.getItem("theme"));
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDark,
        toggleDark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
