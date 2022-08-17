import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export const Texts = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Default Text</Text>
        <Text style={styles.default_text}>italic Text</Text>
        <Text style={styles.text_bold}>Bold Text</Text>
        <Text style={styles.text_small}>Small Text</Text>
        <Text style={styles.text_large}>Large Text</Text>
        <Text style={styles.text_color1}>Text Color</Text>
        <Text style={styles.text_color2}>Text Color</Text>
        <Text style={styles.text_line1}>Line through</Text>
        <Text style={styles.text_line2}>Line through Color</Text>
        <Text style={styles.text_underline1}>underline</Text>
        <Text style={styles.text_underline2}>underline Color</Text>
        <Text style={styles.text_under_line_1}>underline line-through</Text>
        <Text style={styles.text_under_line_2}>underline line-through</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 10,
    flex: 1,
    justifyContent: 'space-around',
  },
  default_text: {
    fontStyle: 'italic',
    marginTop: 16,
  },
  text_bold: {
    fontWeight: 'bold',
    marginTop: 16,
  },
  text_small: {
    fontSize: 10,
    marginTop: 16,
  },
  text_large: {
    fontSize: 25,
    marginTop: 16,
  },
  text_color1: {
    color: 'red',
    marginTop: 16,
  },
  text_color2: {
    color: 'green',
    marginTop: 16,
  },
  text_line1: {
    textDecorationLine: 'line-through',
    marginTop: 16,
  },
  text_line2: {
    textDecorationLine: 'line-through',
    color: 'blue',
    marginTop: 16,
  },
  text_underline1: {
    textDecorationLine: 'underline',
    marginTop: 16,
  },
  text_underline2: {
    textDecorationLine: 'underline',
    color: 'green',
    marginTop: 16,
  },
  text_under_line_1: {
    textDecorationLine: 'underline line-through',
    marginTop: 16,
  },
  text_under_line_2: {
    textDecorationLine: 'underline line-through',
    color: 'red',
    marginTop: 16,
  },
});
