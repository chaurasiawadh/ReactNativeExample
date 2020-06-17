import React from 'react';
import colors from '../../color';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconMat from 'react-native-vector-icons/MaterialIcons';

const Header = props => {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        paddingBottom: 10,
        marginTop: 4,
      }}>
      <StatusBar backgroundColor={colors.header} />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={()=> props.goBack('ApiHome')}
          style={{padding: 6, paddingLeft: 10}}>
          <IconMat name="arrow-back" size={30} color={colors.white} />
        </TouchableOpacity>
        <View style={{marginLeft: 20, paddingTop: 6}}>
          {props.fav ? (
            <Text
              style={{color: colors.white, fontSize: 18, fontWeight: 'bold'}}>
              Favourite
            </Text>
          ) : (
            <Text
              style={{color: colors.white, fontSize: 18, fontWeight: 'bold'}}>
              Popular
            </Text>
          )}
          <Text style={{color: colors.white, fontSize: 14}}>Hot</Text>
        </View>
        <TouchableOpacity style={{margin: 10, paddingLeft: 30}}>
          <IconFont name="caret-down" color={colors.white} size={18} />
        </TouchableOpacity>

        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            flex: 1,
          }}>
          <TouchableOpacity style={{paddingRight: 20, paddingTop: 5}}>
            <IconFontisto name="search" size={16} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => props.goBack('ApiHome')} 
          style={{paddingRight: 20}}>
          {props.fav ? 
            <Icon name="heart" size={24} color={colors.red} />
            :
            <Icon name="heart" size={24} color={colors.white} />
          }

          </TouchableOpacity>
          <TouchableOpacity style={{paddingRight: 20, paddingTop: 6}}>
            <IconFontisto name="more-v-a" size={16} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
