import React from 'react';
import {Switch, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../component/Color';
export default class Switchs extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Switch',
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity>
        <Icon
          name="code"
          size={25}
          style={{marginRight: 20}}
          onPress={() =>
            navigation.navigate('Git', {
              url:
                'https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/Switch.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });
  state = {
    switchValue: false,
    switchCheck: false,
    colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false,
  };
  toggleSwitch = value => {
    this.setState({switchValue: value});
  };
  toggleSwitchs = value => {
    this.setState({switchCheck: value});
  };

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
            color: '#000',
          }}>
          Default Switch
        </Text>
        <Switch
          style={{marginTop: 30}}
          onValueChange={this.toggleSwitchs}
          value={this.state.switchCheck}
        />
        <Text style={{fontSize: 16}}>
          {this.state.switchCheck ? 'ON' : 'OFF'}
        </Text>

        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
            color: '#000',
          }}>
          TintColor Switch
        </Text>

        <Switch
          style={{marginTop: 30}}
          onValueChange={this.toggleSwitch}
          value={this.state.switchValue}
          trackColor={{true: 'yellow', false: 'grey'}}
          tintColor="red"
          thumbTintColor="blue"
          onTintColor="black"
        />
        <Text style={{fontSize: 16}}>
          {this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}
        </Text>

        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
            color: '#000',
          }}>
          OFF Condition Switch
        </Text>

        <Switch
          onValueChange={value => this.setState({colorFalseSwitchIsOn: value})}
          onTintColor="blue"
          style={{marginBottom: 10}}
          thumbTintColor="#3b3b3b"
          tintColor="gray"
          value={this.state.colorFalseSwitchIsOn}
        />

        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
            color: '#000',
          }}>
          ON Condition Switch
        </Text>
        <Switch
          onValueChange={value => this.setState({colorTrueSwitchIsOn: value})}
          onTintColor="#00ff00"
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          ios_backgroundColor="black"
          value={this.state.colorTrueSwitchIsOn}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
