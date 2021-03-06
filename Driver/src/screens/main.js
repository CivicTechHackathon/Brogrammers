import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './home';
import LoginScreen from './login';
import RouteScreen from './route';

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Home: {
        screen: HomeScreen
    },
    Route: {
        screen: RouteScreen
    }
}
,{
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);