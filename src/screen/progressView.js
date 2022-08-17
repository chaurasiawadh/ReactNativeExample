import React from 'react';
import {View, Text, StyleSheet, ProgressBarAndroid} from 'react-native';

export const Progress = () => {
  return (
    <View style={styles.container1}>
      <Text style={styles.container2}>Show ProgressBarAndroid</Text>
      <View style={styles.container3}>
        <ProgressBarAndroid styleAttr="Small" color="#2196F3" />
        <ProgressBarAndroid />
        <ProgressBarAndroid animating={true} color="red" />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="black" />
        <ProgressBarAndroid
          color="blue"
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    alignSelf: 'center',
    padding: 10,
  },
  container2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  container3: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 20,
  },
});
