import React, { Component } from 'react';
import {View, Text, Share, Button, TouchableOpacity, Image} from "react-native";
import colors from "../componenet/Color";


export default class Shares extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Share",
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0
        },
        headerTintColor: "#fff"
      });

    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native Example App Download to the play store.. Click on this Link https://www.google.com',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
      render() {
        return (
            <View>
             <TouchableOpacity style={{justifyContent:"center", margin:30}}> 
                 <Button title="Share" onPress={this.onShare} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onShare}>
                <Image 
                style={{height:200, width:200, alignSelf:"center"}}
                source={require('../image/share.png')} />
            </TouchableOpacity>
            </View>
        );
    }
} 