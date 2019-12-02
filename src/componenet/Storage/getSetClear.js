import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, AsyncStorage} from 'react-native';

export default class GetSet extends Component {
  state = {
    storedNumber: '',
    needRestart: false,
  };

  async UNSAFE_componentWillMount() {
    const storedNumber = await AsyncStorage.getItem(STORAGE_KEY);
    console.warn(storedNumber);

    if (storedNumber) {
      this.setState({
        storedNumber,
      });
    }
  }

  increaseByTen = async () => {
    const {storedNumber} = this.state;
    const newNumber = +storedNumber > 0 ? +storedNumber + 10 : 10;
    await AsyncStorage.setItem(STORAGE_KEY, `${newNumber}`);
    this.setState({storedNumber: `${newNumber}`, needRestart: true});
  };

  clearItem = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    this.setState({needRestart: true});
  };

  render() {
    const {storedNumber, needRestart} = this.state;
    return (
      <View>
        <Text style={styles.text}>Currently stored: </Text>
        <Text testID="storedNumber_text" style={styles.text}>
          {storedNumber}
        </Text>

        <View style={{margin: 10}}>
          <Button
            testID="increaseByTen_button"
            title="Increase by 10"
            onPress={this.increaseByTen}
          />
        </View>
        <View style={{margin: 10}}>
          <Button
            testID="clear_button"
            title="Clear item"
            color="red"
            onPress={this.clearItem}
          />
        </View>

        {needRestart ? (
          <Text style={{color: 'red'}}>Hit restart to see effect</Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export const STORAGE_KEY = 'random';
