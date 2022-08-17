import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import colors from '../../assets/color';

export const ApiHome = ({navigation}) => {
  const favSlide = name => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'RedditApi',
          params: {name},
        }),
      ],
    });
    navigation.dispatch(resetAction);
  };

  const reddit = name => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'RedditApi',
          params: {name},
        }),
      ],
    });
    navigation.dispatch(resetAction);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          alignSelf: 'flex-end',
          padding: 14,
          borderRadius: 4,
          borderColor: colors.primary,
          borderWidth: 4,
          marginTop: 10,
        }}>
        <Text style={{color: 'green', fontWeight: 'bold'}}>Go Home</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => favSlide(true)}
          style={[styles.box, {opacity: 0.8}]}>
          <Text style={styles.name}>Reddit Favorite Api</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => reddit(false)} style={styles.box}>
          <Text style={styles.name}>Reddit Api</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  box: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    margin: 10,
    marginBottom: 20,
  },
  name: {
    color: colors.white,
    fontSize: 22,
  },
});
