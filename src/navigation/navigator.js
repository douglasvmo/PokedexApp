import React from 'react';
import {navigationRef} from './rootNavigation';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {useIsDark} from '../hooks/useTheme';
import Themes from '../constants/theme';

export default function App() {
  const theme = useIsDark() ? Themes.dark : Themes.light;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
