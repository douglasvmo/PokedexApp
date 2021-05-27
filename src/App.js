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
import {Provider as PaperProvider} from 'react-native-paper';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [SplashScreen]);

  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
