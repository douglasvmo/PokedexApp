/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './navigation/navigator';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [SplashScreen]);

  return (
    <Navigator />
  );
};

export default App;
