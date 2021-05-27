import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';
import Routes from './routes';

export default function Navigator() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Routes />
        </NavigationContainer>
    );
}