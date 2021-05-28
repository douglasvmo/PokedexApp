/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './navigation/navigator';
import {ThemeContext} from './context/ThemeContext';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeContext>
      <Navigator />
    </ThemeContext>
  );
};

export default App;
