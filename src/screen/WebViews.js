import React, { Component } from 'react';
import {WebView} from "react-native";
import colors from "../componenet/Color";

export default class WebViews extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "WebView",
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0
        },
        headerTintColor: "#fff"
      });
      render() {
        return (
                <WebView
                    source= {{uri: 'https://www.google.com'}}
                    style= {{ flex: 1}}/>
            
        );
    }
} 