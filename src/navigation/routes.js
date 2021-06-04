import * as React from 'react';
import {Switch} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Pokedex from '../pages/Pokedex';
import Details from '../pages/Details';
import * as S from '../styles/styles';
import {useGlobals} from '../context/global';
import {useIsDark} from '../hooks/useTheme';

const Stack = createStackNavigator();
export default function Navigation() {
  const [{theme}, dispatch] = useGlobals();
  const isDark = useIsDark();
  const _handleDarkThemeChange = () => {
    dispatch({
      type: 'switchTheme',
      theme: isDark ? 'light' : 'dark',
    });
  };

  const Header = () => {
    return (
      <S.ContainerSwitchTheme>
        <S.TitleSwitchTheme>Dark</S.TitleSwitchTheme>
        <Switch value={isDark} onValueChange={_handleDarkThemeChange} />
      </S.ContainerSwitchTheme>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <Header />,
      }}>
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
