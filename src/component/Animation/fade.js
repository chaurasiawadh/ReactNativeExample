import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import colors from '../Color';
import Icon from 'react-native-vector-icons/FontAwesome';

class Fade extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Fade animation',
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
          color="white"
          onPress={() =>
            navigation.navigate('Git', {
              url:
                'https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/Component/fade.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

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
