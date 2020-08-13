
import React, { Component } from 'react';
import { Button,TouchableOpacity,TouchableHighlight, View, Text,StyleSheet } from 'react-native';

export default class Splash extends Component {
	render() {
		return (
			<View>
			
				<TouchableHighlight 
				onPress={() => this.props.navigation.navigate('CreateProfile')}>
            <Text style = {styles.text}>
			Create Profile
            </Text>
         </TouchableHighlight>



		 <TouchableHighlight onPress={() => this.props.navigation.navigate('ProfileList')}>
            <Text style = {styles.text}>
			Profile List
            </Text>
         </TouchableHighlight>

			</View>
		);
	}
}
const styles = StyleSheet.create({
	MainContainer: {
	  justifyContent: 'center',
	  flex: 1,
	  marginLeft: 10,
	  marginRight: 10,
	  marginBottom: 10,
	  marginTop: 30,
	},
  
	item: {
	  padding: 10,
	  fontSize: 18,
	  height: 44,
	  marginBottom: 10,
	},

	button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},

	text: {
		borderWidth: 1,
		padding: 25,
		borderColor: 'black',
	    borderRadius:10,
	    margin:10,
		backgroundColor: 'lightblue'
	 }
  });