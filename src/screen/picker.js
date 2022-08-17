import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

export const Pickers = () => {
  const [user, setUser] = useState('');
  const updateUser = (item) => {
    setUser(item);
  };

  return (
    <View>
      <Text style={styles.container1}>Picker Select</Text>
      <View style={styles.container2}>
        <Picker
          selectedValue={user}
          pickerStyleType="Android"
          onValueChange={updateUser}
          mode="dialog">
          <Picker.Item label="React Native" value="React Native" />
          <Picker.Item label="Android Studio" value="Android Studio" />
          <Picker.Item label="Swift" value="Swift" />
        </Picker>
      </View>
      <Text style={styles.container3}>{user}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    fontSize: 25,
    margin: 8,
    color: 'black',
  },
  container2: {
    margin: 10,
    elevation: 1,
    borderWidth: 1,
  },
  container3: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
