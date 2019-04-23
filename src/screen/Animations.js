import React, { Component } from 'react';
import {View,StyleSheet, Animated, TouchableOpacity, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../componenet/Color"

export default class Animations extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Animation",
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
                 {url:"https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/Animations.js"})}
           />
         </TouchableOpacity>
       ),
      });

      componentWillMount = () => {
      this.animatedWidth = new Animated.Value(100)
      this.animatedHeight = new Animated.Value(100)
     }
     animatedBox = () => {
      Animated.timing(this.animatedWidth, {
         toValue: 370,
         duration: 5000
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 650,
         duration: 5000
      }).start()
    }

    render(){
      const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
   return (
      <View style={{flex:1,justifyContent:"center",alignSelf:"center"}}>
      <Text style={{fontSize:22, fontWeight:"bold", color:"#000",alignSelf:"center"}}>Click this Box</Text>
      <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
         <Animated.View style = {[styles.box, animatedStyle]}/>
      </TouchableOpacity>
      </View>
      )
    }
}
const styles = StyleSheet.create({
   box: {
      backgroundColor: 'green',
      width: 100,
      height: 100,
      borderRadius:30
   }
})
