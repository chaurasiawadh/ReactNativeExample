import React, { Component } from 'react';
import {View,Text, ScrollView,Image,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../componenet/Color"

export default class ScrollViews extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "ScrollView",
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
                    {url:"https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/Scroll.js"})}
              />
            </TouchableOpacity>
          ),
      });
    render(){
        return(
            <View style={{alignSelf:"center", padding:10,flexDirection:"column"}}>
                <View style={{height:"25%"}}>
                <Text style={{fontWeight:"bold", fontSize:20}}>ScrollView Horizontal</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/right.png')} />
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/right.png')} />   
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/right.png')} />   
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/right.png')} />   
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/right.png')} />   
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/right.png')} />
                </ScrollView>
                </View>
                <View>
                <Text style={{fontWeight:"bold", fontSize:20,}}>ScrollView Vertical</Text>
                <View style={{flexDirection:"row"}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/down.png')} />   
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/down.png')} />   
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/down.png')} />   
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/down.png')} />   
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/down.png')} />   
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/down.png')} />   
                    
                </ScrollView>

                <ScrollView>
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/up.png')} /> 
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/up.png')} />  
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/up.png')} />
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/up.png')} />
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/up.png')} />
                    <Image 
                    resizeMode="center"
                    style={{width:150, height:150,margin:10}}
                    source={require('../image/up.png')} />
                    
                </ScrollView>
                </View>
                </View>
            </View>
        );
    }
}