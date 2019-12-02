import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import colors from '../Color';

export const Header = () => {
  navigationOptions = ({navigation}) => ({
    headerTitle: 'Storage',
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity>
        <Icon
          name="code"
          size={25}
          style={{marginRight: 20}}
          color="white"
          onPress={() =>
            navigation.navigate('Git', {
              url:
                'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/storage.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  })
}