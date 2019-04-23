import React, { Component } from 'react';
import {WebView, View, Text} from "react-native";
import colors from "../componenet/Color";

export default class Gits extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Github Code",
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0
        },
        headerTintColor: "#fff"
      });

      state={
        url:this.props.navigation.state.params.url
      }

      render() {
        return (
                <WebView
                    source={{uri:this.state.url}}
                    style= {{ flex: 1}}/>
        );
    }
} 