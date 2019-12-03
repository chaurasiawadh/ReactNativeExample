import React, {Component} from 'react';
import {View, Text, AsyncStorage, TextInput, StyleSheet} from 'react-native';
import Header from '../component/Header/header';

class Storage extends Component {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
        'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/storage.js',
    });
  };

  state = {
    name: '',
  };
  componentDidMount = () =>
    AsyncStorage.getItem('name').then(value => this.setState({name: value}));

  setName = value => {
    AsyncStorage.setItem('name', value);
    this.setState({name: value});
  };
  render() {
    return (
      <View>
        <Header headerTitle="Storage" back={this.goBack} code={this.code} />
        <View style={styles.container}>
          <TextInput style={styles.textInput} onChangeText={this.setName} />
          <Text>{this.state.name}</Text>
        </View>
      </View>
    );
  }
}
export default Storage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  textInput: {
    borderWidth: 1,
    width: 100,
  },
});
