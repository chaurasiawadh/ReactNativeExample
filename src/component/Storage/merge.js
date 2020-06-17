import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  AsyncStorage,
} from 'react-native';

class Merge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myKey: null,
    };
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({myKey: value});
    } catch (error) { }
  }

  async saveKey(value) {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', value);
    } catch (error) { }
  }

  async resetKey() {
    try {
      await AsyncStorage.removeItem('@MySuperStore:key');
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({myKey: value});
    } catch (error) { }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Stored AsyncStorage!</Text>

        <TextInput
          style={styles.formInput}
          placeholder="Enter key you want to save!"
          value={this.state.myKey}
          onChangeText={value => this.saveKey(value)}
        />

        <View style={{margin: 10}}>
          <Button
            onPress={this.getKey.bind(this)}
            title="Get Key"
            color="#2196f3"
            accessibilityLabel="Get Key"
          />
        </View>

        <View style={{margin: 10}}>
          <Button
            onPress={this.resetKey.bind(this)}
            title="Reset"
            color="#f44336"
            accessibilityLabel="Reset"
          />
        </View>

        <Text style={styles.instructions}>
          Stored key is = {this.state.myKey}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: '#555555',
    margin: 10,
    borderRadius: 4,
    paddingLeft: 10,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
});
export default Merge;
