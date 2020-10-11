import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Home from '../pages/Home';
import AboutPage01 from '../pages/About/AboutPage01';
import AboutPage02 from '../pages/About/AboutPage02';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>

                <Screen name='AboutPage' component={AboutPage01} />

                <Screen name='Alt-AboutPage' component={AboutPage02} />

                <Screen name='Home' component={Home} />

            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;