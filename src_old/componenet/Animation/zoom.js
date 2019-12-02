import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../Color';

export default class Animations extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Multiple Animation',
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
          style={{marginRight: 20}}
          color="#fff"
          onPress={() =>
            navigation.navigate('Git', {
              url:
                'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/zoom.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

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
    }).start(() => this.spin());
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
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
              source={require('../../image/down.png')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
