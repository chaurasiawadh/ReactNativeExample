import React, { Component } from 'react';
import {View,Text, StatusBar, ImageBackground, Button, TouchableOpacity} from "react-native";
import colors from "../componenet/Color"
import Icon from "react-native-vector-icons/FontAwesome5"

export default class Home extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "React Native Example",
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0
        },
        headerTintColor: "#000",
      });
    render(){
        return(
            <ImageBackground
                style={{flex:1, alignSelf:"center", backgroundColor:colors.primary}}
                resizeMode="cover"
                //blurRadius={2}
                //source={require('../image/background.png')}
                >
        <StatusBar
            barStyle="light-content"
            backgroundColor={colors.primary}
          />
          <View style={{justifyContent:"center", flex:1}}>
          <Icon name="code" size={120} style={{textAlign:"center"}} />
          </View>
           <View style={{alignSelf:"flex-end",flex:1, justifyContent:"flex-end"}}>
              <Text style={{color:"black", fontSize:16, margin:20, textAlign:"center"}} >
                    React Native lets you build mobile apps using only JavaScript. 
                    It uses the same design as React, letting you compose a rich mobile 
                    UI using declarative components.</Text>
                    {/* <Text style={{ margin:20, textAlign:"center"}}>
                    The apps you are building with React Native aren't mobile web apps
                    because React Native uses the same fundamental UI building blocks as 
                    regular iOS and Android apps. Instead of using Swift, Kotlin or Java, 
                    you are putting those building blocks together using JavaScript and React.</Text> */}

                <TouchableOpacity 
                  onPress={()=>this.props.navigation.openDrawer()}                  
                  style={{backgroundColor:colors.white, padding:5, margin:30,justifyContent:"flex-end"}}>
                  <Text style={{fontSize:20, textAlign:"center", color:colors.black}}> Get Start</Text>
                </TouchableOpacity>
                </View>
                </ImageBackground>
        );
    }
}
