import React, {Component} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import colors from '../../assets/color';

export const Loader = () => {
  let rotateValue = new Animated.Value(0);

  const start = () => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 400,
        Infinite: true,
      }),
    ).start();
  };
  start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {
              rotate: rotateValue.interpolate({
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
