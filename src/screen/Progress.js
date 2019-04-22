import React, { Component } from 'react';
import {View,Text, Button, ProgressBarAndroid} from "react-native";
import colors from "../componenet/Color"

export default class Texts extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "ProgressBarAndroid",
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0
        },
        headerTintColor: "#fff"
      });
    render(){
        return(
            <View style={{alignSelf:"center", padding:10}}>
                <Text style={{fontSize:25, fontWeight:"bold", color:"black"}}>Show ProgressBarAndroid</Text>
                <View style={{flex: 1, justifyContent: 'space-evenly',padding: 20,}}>
                <ProgressBarAndroid styleAttr="Small" color="#2196F3" />
                <ProgressBarAndroid />
                <ProgressBarAndroid animating={true} color="red" />
                <ProgressBarAndroid styleAttr="Horizontal" />
                <ProgressBarAndroid styleAttr="Horizontal" color="black" />
                <ProgressBarAndroid color="blue"
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.7}
                />
                </View>

            </View>
        );
    }
}