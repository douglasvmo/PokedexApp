import {useGlobals} from '../context/global';

const THEME_DARK = 'dark';

export const useIsDark = () => {
  const [{theme}] = useGlobals();
  return theme === THEME_DARK;
};
