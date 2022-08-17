import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Screen1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar barStyle="dark-content" backgroundColor="blue" />
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen2')}
        style={styles.button1}>
        <Text style={styles.text1}>Go to Red Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Screen2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container2}>
      <StatusBar barStyle="dark-content" backgroundColor="red" />
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen1')}
        style={styles.button2}>
        <Text style={styles.text2}>Go to Blue Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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

const styles = StyleSheet.create({
  container1: {backgroundColor: 'blue', flex: 1},
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  text1: {
    fontSize: 28,
    padding: 20,
    color: 'red',
    backgroundColor: 'white',
  },
  container2: {backgroundColor: 'red', flex: 1},
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  text2: {
    fontSize: 28,
    padding: 20,
    color: 'blue',
    backgroundColor: 'white',
  },
});
