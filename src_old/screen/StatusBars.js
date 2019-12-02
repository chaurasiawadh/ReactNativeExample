import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {SafeAreaView, Text, Button, StatusBar} from 'react-native';
import colors from '../component/Color';

class Screen1 extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'blue', flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="blue" />
        <Text
          style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            justifyContent: 'center',
          }}>
          Blue Screen
        </Text>
        <Button
          title="Go to Red Screen"
          onPress={() => this.props.navigation.navigate('Screen2')}
          color="red"
        />
      </SafeAreaView>
    );
  }
}
class Screen2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="red" />
        <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
          Red Screen
        </Text>
        <Button
          title="Go to Blue Screen"
          onPress={() => this.props.navigation.navigate('Screen1')}
          color="blue"
        />
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
