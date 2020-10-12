import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Home from '../pages/Home';
import AboutPage01 from '../pages/About/AboutPage01';
import AboutPage02 from '../pages/About/AboutPage02';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import NewProject from '../pages/NewProject';
import CompanyOwner from '../pages/Data/CompanyOwner';
import Company from '../pages/Data/Company';
import CompanyAbout from '../pages/Data/CompanyAbout';
import Finished from '../pages/Finished';
import Financial from '../pages/Data/Financial';
import CompanyProfile from '../pages/CompanyProfile';
import Register from '../pages/Register';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                
                <Screen name='AboutPage' component={AboutPage01} />
                <Screen name='Alt-AboutPage' component={AboutPage02} />

                <Screen name='Landing' component={Landing} />
                <Screen name='Login' component={Login} />
                <Screen name='Register' component={Register} />

                <Screen name='Home' component={Home} />
                <Screen name='CompanyProfile' component={CompanyProfile} />
                <Screen name='NewProject' component={NewProject} />

                <Screen name='CompanyOwner' component={CompanyOwner} />
                <Screen name='Company' component={Company} />
                <Screen name='CompanyAbout' component={CompanyAbout} />
                <Screen name='Financial' component={Financial} />

                <Screen name='Finished' component={Finished} />

            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;