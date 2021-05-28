import * as React from 'react';
import {View} from 'react-native';
import {Switch, Text} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import {StateThemeContext} from '../context/ThemeContext';
import Details from '../pages/Details';

const Stack = createStackNavigator();

export default function Navigation() {
  const {toggleTheme, isThemeDark} = React.useContext(StateThemeContext);

  const Header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Dark</Text>
        <Switch value={isThemeDark} onValueChange={toggleTheme} />
      </View>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <Header />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
