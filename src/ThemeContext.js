import React from "react";
import theme from './theme';
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

const defaultContextData = {
  dark: false,
  toggle: () => {}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = React.useState({
    dark:false,
    hasThemeMounted: false
  });

  React.useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: isDark, hasThemeMounted: true })
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeLoaded) {
    return <div>lol no theme</div>;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  }

  const computedTheme = themeState.dark ? theme("dark") : theme("light");

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider value={{dark: themeState.dark, toggle}}>
        {children}
        </ThemeContext.Provider>
        </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };