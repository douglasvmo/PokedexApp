import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default function Navigator() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}