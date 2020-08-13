/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './src/ui/Splash';
import CreateProfile from './src/ui/CreateProfile';
import ProfileList from './src/ui/ProfileList';

const AppNavigator = createStackNavigator(
	{
		Splash,
		CreateProfile,
		ProfileList
	},
	{
		initialRouteName: 'Splash'
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}