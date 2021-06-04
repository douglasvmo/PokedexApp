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
import {initialState, reducer, StateProvider} from './context/global';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Navigator />
    </StateProvider>
  );
};

export default App;
