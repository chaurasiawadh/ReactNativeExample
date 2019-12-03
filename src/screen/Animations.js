import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../component/Color';
import Header from '../component/Header/header';

let list = [
  {name: 'Multiple', click: 'zoom'},
  {name: 'Fade', click: 'fade'},
  {name: 'Shadow', click: 'shadow'},
  {name: 'Loader', click: 'loader'},
];

class Animations extends Component {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
        'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/Animations.js',
    });
  };

  render() {
    return (
      <View>
        <Header headerTitle="Animation" back={this.goBack} code={this.code} />
        <View style={styles.container}>
          {list.map(item => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(item.click)}
              style={styles.box}>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
export default Animations;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  box: {
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    marginBottom: 20,
  },
  name: {
    color: colors.white,
    fontSize: 28,
  },
});
