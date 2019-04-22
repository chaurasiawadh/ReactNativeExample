import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import colors from "../componenet/Color";

export default class App extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Book Details",
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0
    },
    headerTintColor: "#fff"
  });
  render() {
    return (
      <View>
      <ScrollView>
        <Text>hey</Text>
      </ScrollView>
      </View>
   );
  }
}
const styles = StyleSheet.create({

});
