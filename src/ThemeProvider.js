import React from "react";
import Theme from './Theme';
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import { stringify } from "querystring";


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
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true })
  }, []);
  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeLoaded) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  }

  const computedTheme = themeState.dark ? Theme("dark") : Theme("light");

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider value={{dark: themeState.dark, toggle}}>
        {children}
        </ThemeContext.Provider>
        </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme }