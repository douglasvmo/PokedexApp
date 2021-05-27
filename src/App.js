/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const App: () => Node = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [SplashScreen])

  return (
    <View>
      <Text>Pokedex App</Text>
    </View>
  );
};

export default App;
