import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../component/color';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Intro =
  'React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI using declarative components.';

class Home extends Component {
  render() {
    return (
      <ImageBackground style={styles.container} resizeMode="cover">
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <View style={styles.head}>
          <Icon name="code" size={120} color="#fff" style={styles.icn} />
        </View>
        <TouchableOpacity 
          onPress={()=> this.props.navigation.navigate('Tutorial')}
        style={styles.tut}>
          <Text style={styles.tutxt}>Tutorial</Text>
        </TouchableOpacity>
        <View style={styles.foot}>
          <Text style={styles.intro}>{Intro}</Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}
            style={styles.start}>
            <Text style={styles.get}> Get Start</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: colors.primary,
  },
  head: {
    justifyContent: 'center',
    flex: 1,
  },
  icn: {
    textAlign: 'center',
  },
  foot: {
    alignSelf: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  },
  intro: {
    color: 'black',
    fontSize: 18,
    margin: 20,
    textAlign: 'center',
  },
  start: {
    backgroundColor: colors.white,
    margin: 30,
    borderRadius: 4,
    justifyContent: 'flex-end',
  },
  get: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    padding: 10,
  },
  tut: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 10,
  },
  tutxt: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: colors.white,
  },
});
