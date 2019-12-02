import React, {Component} from 'react';
import {View, StyleSheet, Animated, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../component/Color';

let list = [
  {name: 'Multiple', click: 'zoom'},
  {name: 'Fade', click: 'fade'},
  {name: 'Shadow', click: 'shadow'},
  {name: 'Loader', click: 'loader'},
];

export default class Animations extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Animation',
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
          color="white"
          style={{marginRight: 20}}
          onPress={() =>
            navigation.navigate('Git', {
              url:
                'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/Animations.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        {list.map(item => (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(item.click)}
            style={styles.box}>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
