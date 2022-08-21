
import React, {Component} from 'react';
import {
  View,
  Text,
  Linking,
  StatusBar,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Intro =
  'React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI using declarative components.';

export const Home = ({navigation}) => {
  const url = 'https://github.com/chaurasiawadh/ReactNativeExample/tree/master';
  return (
    <ImageBackground style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Text style={styles.headerTxt}>React Native </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL(url).catch(err => alert('Error: ', err))}
        style={styles.head}>
        <Icon name="code" size={100} color="#fff" style={styles.icn} />
      </TouchableOpacity>
    
      <View style={styles.foot}>
        <Text style={styles.intro}>{Intro}</Text>

        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.start}>
          <Text style={styles.get}> Get Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

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
  headerTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    color: colors.white,
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
    color: colors.white,
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
    color: colors.primary,
    padding: 10,
  },
  tut: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 10,
    margin: 4,
  },
  tutxt: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 14,
    color: colors.white,
  },
});
