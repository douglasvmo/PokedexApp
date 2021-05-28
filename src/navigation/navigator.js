import React from 'react';
import {StateThemeContext} from '../context/ThemeContext';
import {navigationRef} from './rootNavigation';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  const {theme} = React.useContext(StateThemeContext);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
