import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const arr = [];
for (let i = 0; i < 150; i++) {
  arr.push(i);
}

export const Shadow = () => {
  const [color, setColor] = useState('#00BCD4');
  let animatedValue = [];

  useEffect(() => {
    arr.forEach(value => {
      animatedValue[value] = new Animated.Value(0);
    });
    animate();
    ChangeColorFunction();
  }, []);

  const ChangeColorFunction = () => {
    let ColorCode =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    setColor(ColorCode);
  };
  const animate = () => {
    const animations = arr.map(item => {
      return Animated.timing(animatedValue[item], {
        toValue: 1,
        duration: 6000,
        useNativeDriver: false,
      });
    });
    Animated.stagger(10, animations).start();
  };
  const animations = arr.map((a, i) => {
    return (
      <Animated.View
        key={i}
        style={{
          opacity: animatedValue[a],
          backgroundColor: color,
          height: 10,
          width: 10,
          marginLeft: 4,
          marginTop: 4,
        }}
      />
    );
  });

  return <View style={styles.container}>{animations}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
