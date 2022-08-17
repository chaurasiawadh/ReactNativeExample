import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';

class Zoom extends Component {
  

  constructor() {
    super();
    this.spinValue = new Animated.Value(0);

    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
    this.animate();
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(() => this.spin());
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(() => this.animate());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0],
    });
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18],
    });
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg'],
    });
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Animated.View
              style={{
                marginLeft,
                height: 100,
                width: 100,
                marginTop: 30,
                borderRadius: 50,
                backgroundColor: 'green',
              }}
            />
            <Animated.View
              style={{
                opacity,
                marginTop: 40,
                height: 100,
                width: 100,
                borderRadius: 10,
                alignSelf: 'center',
                backgroundColor: 'red',
              }}
            />
            <Animated.View
              style={{
                marginLeft: movingMargin,
                height: 100,
                width: 100,
                marginTop: 30,
                borderRadius: 50,
                backgroundColor: 'blue',
              }}
            />
            <Animated.Text
              style={{
                fontSize: textSize,
                alignSelf: 'center',
                marginTop: 40,
                color: 'green',
              }}>
              React Native Animation Example
            </Animated.Text>
            <Animated.View
              style={{
                transform: [{rotateX}],
                marginTop: 50,
                height: 100,
                width: 160,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: 'yellow',
              }}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 20,
                  padding: 20,
                }}>
                Rotate TransformX
              </Text>
            </Animated.View>

            <Animated.Image
              resizeMode="contain"
              style={{
                width: 200,
                height: 200,
                marginTop: 30,
                alignSelf: 'center',
                transform: [{rotate: spin}],
              }}
              // @ts-ignore
              source={require('../../image/up.png')}
            />
            <Animated.Image
              resizeMode="contain"
              style={{
                width: 200,
                height: 200,
                marginTop: 30,
                marginBottom: 40,
                alignSelf: 'center',
                transform: [{rotate: spin}],
              }}
              // @ts-ignore
              source={require('../../image/down.png')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Zoom;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
