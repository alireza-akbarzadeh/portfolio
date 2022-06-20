import React from "react";
import { ThemeProvider } from "styled-components/macro";
import GlobalStyle from "../../styles/globalStyle";
import { dark } from "./dark";
import { light } from "./light";

export const ThemeContext = React.createContext({
  theme: "light",
  toggle: () => {},
});

export const useTheme = () => {
  const { theme, toggle } = React.useContext(ThemeContext);

  return { theme: theme === "light" ? light : dark, toggle, themeName: theme };
};

export const StyledThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggle = React.useCallback(() => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }, []);

  const values = React.useMemo(
    () => ({
      theme,
      toggle,
    }),
    [toggle, theme]
  );

  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export * from "./common";
export * from "./dark";
export * from "./light";
