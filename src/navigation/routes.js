import * as React from 'react';
import {Switch} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import {StateThemeContext} from '../context/ThemeContext';
import Details from '../pages/Details';
import * as S from '../styles/styles';

const Stack = createStackNavigator();

export default function Navigation() {
  const {toggleTheme, isThemeDark} = React.useContext(StateThemeContext);

  const Header = () => {
    return (
      <S.ContainerSwitchTheme>
        <S.TitleSwitchTheme>Dark</S.TitleSwitchTheme>
        <Switch value={isThemeDark} onValueChange={toggleTheme} />
      </S.ContainerSwitchTheme>
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
