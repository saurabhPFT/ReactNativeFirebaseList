import React, { Component } from 'react';
import {
	View,
	Text,
	ToastAndroid,
	TouchableHighlight,
	StyleSheet,
	TextInput,
	Button,
	AlertIOS
} from 'react-native';

import { db } from '../Firebaseconfiguration';


function notifyMessage(msg: string) {
	if (Platform.OS === 'android') {
	  ToastAndroid.show(msg, ToastAndroid.SHORT)
	} else {
	  AlertIOS.alert(msg);
	}
  }

export default class CreateProfile extends Component {
	state = {
		name: '',
		desc: ''
	};

	handleName = e => {
		this.setState({
			name: e.nativeEvent.text
		});
	};

	handleDesc = e => {
		this.setState({
			desc:e.nativeEvent.text
		});
	};

	handleSubmit = () => {
		db.ref('/profile').push({
			name: this.state.name,
			desc: this.state.desc
		});
		notifyMessage("Data saved successfully")
		this.setState({
			name: '',
			desc:''
		  })

	};

	

	render() {
		return (
			<View style={styles.main}>



				<Text style={styles.title}>Create Profile</Text>

				<TextInput placeholder="Enter Name" style={styles.itemInput} onChange={this.handleName} value={this.state.name} />
				<TextInput placeholder="Enter EmailId" style={styles.itemInput} onChange={this.handleDesc}  value={this.state.desc}/>
				<TouchableHighlight
					style={styles.button}
					underlayColor="white"
					onPress={this.handleSubmit}
				>
					<Text style={styles.buttonText}>Create</Text>
				</TouchableHighlight>

				<Button
					style={styles.button}
					underlayColor="white"
					title="Profile List"
					onPress={() => this.props.navigation.navigate('ProfileList')}>
				>
		
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: 'lightblue'
	},
	title: {
		marginBottom: 20,
		fontSize: 25,
		textAlign: 'center'
	},
	itemInput: {
		height: 50,
		padding: 10,
		marginRight: 5,
		fontSize: 23,
		marginBottom:20,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 30,
		color: 'black'
	},

	buttonText: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center'
	},
	button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 50,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});
