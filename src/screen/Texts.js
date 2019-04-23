import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../componenet/Color"

export default class Texts extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Text",
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
                  {url:"https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/Texts.js"})}
            />
          </TouchableOpacity>
        ),
      });
    render(){
        return(
            <View style={{alignSelf:"center", padding:10, flex:1, justifyContent:"space-around"}}>
                <Text>Default Text</Text>
                <Text style={{fontStyle:"italic"}}>italic Text</Text>
                <Text style={{fontWeight:"bold"}}>Bold Text</Text>
                <Text style={{fontSize:10}}>Small Text</Text>
                <Text style={{fontSize:25,}}>Large Text</Text>
                <Text style={{color:"red"}}>Text Color</Text>
                <Text style={{color:"green"}}>Text Color</Text>
                <Text style={{textDecorationLine:"line-through"}}>Line through</Text>
                <Text style={{textDecorationLine:"line-through", color:"blue"}}>Line through Color</Text>
                <Text style={{textDecorationLine:"underline"}}>underline</Text>
                <Text style={{textDecorationLine:"underline", color:"green"}}>underline Color</Text>
                <Text style={{textDecorationLine:"underline line-through"}}>underline line-through</Text>
                <Text style={{textDecorationLine:"underline line-through", color:"red"}}>underline line-through</Text>

            </View>
        );
    }
}
