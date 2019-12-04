import {createStackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {SafeAreaView, Text, StatusBar, TouchableOpacity} from 'react-native';

class Screen1 extends React.Component {
  
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'blue', flex:1}}>
      <StatusBar barStyle="dark-content" backgroundColor="blue" />
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Screen2')}
      style={{justifyContent:"center", alignItems:"center", flex:1, alignSelf:"center"}}>
        <Text style={{fontSize:28, padding:20, color:"red", backgroundColor:"white", }}>Go to Red Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
    );
  }
}
class Screen2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'red', flex:1}}>
        <StatusBar barStyle="dark-content" backgroundColor="red" />
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Screen1')}
        style={{justifyContent:"center", alignItems:"center", flex:1, alignSelf:"center"}}>
          <Text style={{fontSize:28, padding:20, color:"blue", backgroundColor:"white", }}>Go to Blue Screen</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default createStackNavigator(
  {
    Screen1: {
      screen: Screen1,
    },
    Screen2: {
      screen: Screen2,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
