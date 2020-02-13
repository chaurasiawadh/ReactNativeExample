import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../component/color';

let list = [
  { name: 'Multiple', click: 'Multiple' },
  { name: 'Fade', click: 'fade' },
  { name: 'Shadow', click: 'shadow' },
  { name: 'Loader', click: 'loader' },
];

class Animations extends Component {
  render() {
    return (
      <View style={styles.container}>
        {list.map(item => (
          <TouchableOpacity
            key={item.name}
            onPress={() => this.props.navigation.navigate(item.click)}
            style={styles.box}>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        ))}
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
