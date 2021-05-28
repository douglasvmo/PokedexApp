import React from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme, mode: "exact", 
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

export const StateThemeContext = React.createContext({
  toggleTheme: () => {},
  theme: {},
  isThemeDark: false,
});

export const ThemeContext = props => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(prev => !prev);
  }, [isThemeDark]);

  const themePreferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <StateThemeContext.Provider value={themePreferences}>
      {props.children}
    </StateThemeContext.Provider>
  );
};
