import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated, TouchableOpacity} from 'react-native';

class Fade extends Component {
  constructor() {
    super();
    this.state = {
      fadeValue: new Animated.Value(0),
    };
  }

  fade = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 0,
      duration: 500,
    }).start();
  };
  start = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => this.start()}>
          <Text style={styles.textBtn}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.fade()}>
          <Animated.View
            style={[
              styles.item,
              {
                opacity: this.state.fadeValue,
              },
            ]}>
            <Text style={styles.text}>Fade </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Fade;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    height: 250,
    width: 200,
    margin: 5,
    borderRadius: 12,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'red',
    padding: 30,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textBtn: {
    color: '#f4f4f4',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
});