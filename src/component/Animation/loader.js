import React, {Component} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import colors from '../color';

class Loader extends Component {
  

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
            height: 82,
            width: 82,
            margin: 5,
            borderWidth: 6,
            borderColor: colors.primary,
            borderBottomColor: colors.black,
            borderRadius: 50,
            justifyContent: 'center',
          }}
        />
        <Animated.View />
      </View>
    );
  }
}
export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
