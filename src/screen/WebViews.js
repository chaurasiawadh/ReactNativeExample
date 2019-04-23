import React, { Component } from 'react';
import {WebView,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../componenet/Color";

export default class WebViews extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "WebView",
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0
        },
        headerTintColor: "#fff",
        headerRight: (
          <TouchableOpacity>
          <Icon 
            name="code" 
            size={25} 
            style={{marginRight:20}}
            onPress={()=>navigation.navigate("Git", 
                  {url:"https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/WebViews.js"})}
            />
          </TouchableOpacity>
        ),
      });
      render() {
        return (
                <WebView
                    source= {{uri: 'https://www.google.com'}}
                    style= {{ flex: 1}}/>
            
        );
    }
} 