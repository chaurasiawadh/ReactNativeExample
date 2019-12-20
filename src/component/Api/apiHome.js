import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../color';
import { StackActions, NavigationActions} from 'react-navigation';

let list = [
  {name: 'Reddit Api', click: 'RedditApi'},
  // {name: 'Google Map Api', click: ''},
  // {name: 'Google Gmail APi', click: ''},
  // {name: 'Facebook Login Api', click: ''},
];

class ApiHome extends Component {

  favSlide = name => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'RedditApi',
          params: {name},
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };

  reddit = name => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'RedditApi',
          params: {name},
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };


  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        // onPress={() => this.props.navigation.navigate('RedditApi')}
        onPress={() => this.favSlide(true)}
        style={[styles.box,{opacity:0.6}]}>
        <Text style={styles.name}>Reddit Favourite Api</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => this.props.navigation.navigate('RedditApi')}
        onPress={() => this.reddit(false)}
        style={styles.box}>
        <Text style={styles.name}>Reddit Api</Text>
      </TouchableOpacity>
        {/* {list.map(item => (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(item.click)}
            style={styles.box}>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        ))} */}
      </View>
    );
  }
}
export default ApiHome;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  box: {
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    marginBottom: 20,
  },
  name: {
    color: colors.white,
    fontSize: 28,
  },
});
