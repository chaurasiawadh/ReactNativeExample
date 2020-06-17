import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import colors from '../color';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

  class Header extends Component{
    constructor(props){
      super(props);
      this.state = {
          title: props.headerTitle,
          back: props.back,
          code: props.code,
          urlCommon :  'https://raw.githubusercontent.com/chaurasiawadh/ReactNativeExample/master/src/',

      }
    }
    render(){

  return (
    <View style={{backgroundColor: colors.primary, paddingBottom:10}}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={{flexDirection: 'row', justifyContent:"space-between", marginTop:14}}>
        <View style={{flexDirection: 'row', marginLeft:16}}>
        <TouchableOpacity onPress={this.state.back}>
        <IconMaterial 
        size={30}
        color={colors.white}
        name="arrow-back" />
        </TouchableOpacity>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: colors.white, marginLeft:14}}>
          {this.state.title}
        </Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="code"
            size={25}
            style={{marginRight: 20}}
            color="white"
            onPress={this.state.code}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
};

export default Header;
