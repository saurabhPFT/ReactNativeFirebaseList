import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import { db } from '../Firebaseconfiguration';

let profileResources = db.ref('/profile');


export default class ProfileList extends Component {
	state = {
		profiles: []
	};

	componentDidMount() {
		profileResources.on('value', snapshot => {
			let data = snapshot.val();
			let profiles = Object.values(data);
			this.setState({ profiles });
		});
	}


	render() {  
        return (  
            <View style={styles.MainContainer}>  
                <FlatList  
					data={this.state.profiles }
					ItemSeparatorComponent = {this.FlatListItemSeparator}
					renderItem={this._renderItem} 
                />  
            </View>  
        );  
	}
	_renderItem = ({item}) => {

        return(
            <View style={styles.item}>
                <Text >{item.name} </Text>
                <Text>{item.desc}</Text>
            </View>
        );

  }
  

	FlatListItemSeparator = () => {
		return (
		  //Item Separator
		  <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
		);
	  };




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
  });