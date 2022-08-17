import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import colors from '../../component/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  const title = props.headerTitle;
  const back = props.back;
  const code = props.code;
  const urlCommon =
    'https://raw.githubusercontent.com/chaurasiawadh/ReactNativeExample/master/src/';

  return (
    <View style={{backgroundColor: colors.primary, paddingBottom: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 14,
        }}>
        <View style={{flexDirection: 'row', marginLeft: 16}}>
          <TouchableOpacity onPress={back}>
            <IconMaterial size={30} color={colors.white} name="arrow-back" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: colors.white,
              marginLeft: 14,
            }}>
            {title}
          </Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="code"
            size={25}
            style={{marginRight: 20}}
            color="white"
            onPress={code}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
