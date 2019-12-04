import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';

const arr = [];
for (var i = 0; i < 150; i++) {
  arr.push(i);
}

class Shadow extends Component {
  constructor() {
    super();
    this.animatedValue = [];
    arr.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    });
    this.state = {
      ColorHolder: '#00BCD4',
    };
  }

  componentDidMount() {
    this.animate();
    this.ChangeColorFunction();
  }

  ChangeColorFunction = () => {
    var ColorCode =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    this.setState({
      ColorHolder: ColorCode,
    });
  };

  animate() {
    const animations = arr.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: 1,
        duration: 6000,
      });
    });
    Animated.stagger(10, animations).start();
  }

  render() {
    const animations = arr.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.animatedValue[a],
            height: 10,
            width: 10,
            backgroundColor: this.state.ColorHolder,
            marginLeft: 4,
            marginTop: 4,
          }}
        />
      );
    });
    return <View style={styles.container}>{animations}</View>;
  }
}

export default Shadow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
