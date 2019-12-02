import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../Color';

export default class Infinite extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Loader Animation',
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
                'https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/Component/loader.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

  state = {
    rotateValue: new Animated.Value(0),
  };

  componentDidMount() {
    this._start();
  }
  _start = () => {
    Animated.loop(
      Animated.timing(this.state.rotateValue, {
        toValue: 1,
        duration: 400,
        Infinite: true,
      }),
    ).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: this.state.rotateValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '380deg'],
                }),
              },
            ],
            height: 80,
            width: 80,
            margin: 5,
            borderWidth: 4,
            borderColor: '#888',
            borderBottomColor: '#8bffff',
            borderRadius: 50,
            justifyContent: 'center',
          }}
        />
        <Animated.View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
