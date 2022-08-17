import React, {useState} from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';

export const Switches = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [switchCheck, setSwitchCheck] = useState(false);
  const [colorTrueSwitchIsOn, setColorTrueSwitchIsOn] = useState(true);
  const [colorFalseSwitchIsOn, setColorFalseSwitchIsOn] = useState(false);

  const toggleSwitch = value => {
    setSwitchValue(value);
  };
  const toggleSwitchs = value => {
    setSwitchCheck(value);
  };

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
        onValueChange={toggleSwitchs}
        value={switchCheck}
      />
      <Text style={{fontSize: 16}}>{switchCheck ? 'ON' : 'OFF'}</Text>

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
        onValueChange={toggleSwitch}
        value={switchValue}
        trackColor={{true: 'yellow', false: 'grey'}}
        tintColor="red"
        thumbTintColor="blue"
        onTintColor="black"
      />
      <Text style={{fontSize: 16}}>
        {switchValue ? 'Switch is ON' : 'Switch is OFF'}
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
        onValueChange={value => setColorFalseSwitchIsOn(value)}
        onTintColor="blue"
        style={{marginBottom: 10}}
        thumbTintColor="#3b3b3b"
        tintColor="gray"
        value={colorFalseSwitchIsOn}
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
        onValueChange={value => setColorTrueSwitchIsOn(value)}
        onTintColor="#00ff00"
        thumbTintColor="#0000ff"
        tintColor="#ff0000"
        ios_backgroundColor="black"
        value={colorTrueSwitchIsOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
