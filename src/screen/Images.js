import React, { Component } from 'react';
import {View,Text, ScrollView,Image, TouchableOpacity} from "react-native";
import colors from "../componenet/Color"

export default class Images extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Image View",
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0
        },
        headerTintColor: "#fff"
      });
    render(){
        return(
            <View style={{ padding:10,}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity>
                    <Image 
                        style={{height:200, width:"100%", opacity:0.3}}
                        source={require('../image/wall1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        style={{height:200, width:"100%", marginTop:10}}
                        source={require('../image/wall1.jpg')} />
                </TouchableOpacity>
                <View style={{marginTop:10, flexDirection:"row"}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={{alignSelf:"center"}}>
                    <Image
                        style={{height:200,width:200}}
                        source={require('../image/girl1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:"center", marginLeft:10}}>
                    <Image
                        style={{height:150,width:150}}
                        source={require('../image/girl1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:"center", marginLeft:10}}>
                    <Image
                        style={{height:100,width:100}}
                        source={require('../image/girl1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:"center", marginLeft:10}}>
                    <Image
                        style={{height:50,width:50}}
                        source={require('../image/girl1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:"center", marginLeft:10}}>
                    <Image
                        style={{height:100,width:100}}
                        source={require('../image/girl1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:"center", marginLeft:10}}>
                    <Image
                        style={{height:150,width:150}}
                        source={require('../image/girl1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:"center", marginLeft:10}}>
                    <Image
                        style={{height:200,width:200}}
                        source={require('../image/girl1.jpg')} />
                </TouchableOpacity>
                </ScrollView>
                </View>
                <View style={{marginTop:10}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View>
                            <Image style={{height:200, width:200, borderRadius:30/2}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View>
                            <Image style={{height:200, width:200, borderRadius:60/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View>
                            <Image style={{height:200, width:200, borderRadius:90/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View>
                            <Image style={{height:200, width:200, borderRadius:120/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View>
                            <Image style={{height:200, width:200, borderRadius:160/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View style={{alignSelf:"center"}}>
                            <Image style={{height:180, width:180, borderRadius:200/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View style={{alignSelf:"center"}}>
                            <Image style={{height:140, width:140, borderRadius:300/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View style={{alignSelf:"center"}}>
                            <Image style={{height:100, width:100, borderRadius:500/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View style={{alignSelf:"center"}}>
                            <Image style={{height:80, width:80, borderRadius:500/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View style={{alignSelf:"center"}}>
                            <Image style={{height:40, width:40, borderRadius:500/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View style={{alignSelf:"center"}}>
                            <Image style={{height:80, width:80, borderRadius:500/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View style={{alignSelf:"center"}}>
                            <Image style={{height:100, width:100, borderRadius:500/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View style={{alignSelf:"center"}}>
                            <Image style={{height:140, width:140, borderRadius:300/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View style={{alignSelf:"center"}}>
                            <Image style={{height:180, width:180, borderRadius:200/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View>
                            <Image style={{height:200, width:200, borderRadius:160/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View>
                            <Image style={{height:200, width:200, borderRadius:120/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View>
                            <Image style={{height:200, width:200, borderRadius:90/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                        <View>
                            <Image style={{height:200, width:200, borderRadius:30/2, marginLeft:10}}
                            source={require('../image/girl2.jpg')} />
                        </View>
                    </ScrollView>
                </View>
                </ScrollView>
            </View>
        );
    }
}