import React, { Component } from 'react';
import {View, Text, Picker} from "react-native";
import colors from "../componenet/Color";

export default class Pickers extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Picker",
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0
        },
        headerTintColor: "#fff"
      });

      state = {user: ''}      
      updateUser = (user) => {
        this.setState({ user: user })
      };

      render() {
        return (
             <View> 
               <Text style={{fontSize:25, margin:8, color:"black"}}>Picker Select</Text>
              <View style={{margin:10, elevation:1, borderWidth:1}}>
                <Picker selectedValue = {this.state.user} 
                  pickerStyleType="Android"
                  onValueChange = {this.updateUser} mode="dialog">
                <Picker.Item label = "React Native" value = "React Native" />
                <Picker.Item label = "Android Studio" value = "Android Studio" />
                <Picker.Item label = "Swift" value = "Swift" />
                </Picker>
              </View>
              <Text style={{alignSelf:"center", fontSize:20, fontWeight:"bold", color:"red"}}>{this.state.user}</Text>
            </View>
        );
    }
} 