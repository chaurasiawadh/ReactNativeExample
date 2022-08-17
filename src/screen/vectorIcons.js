import React from 'react';
import {WebView} from 'react-native-webview';
import {View, ActivityIndicator} from 'react-native';
import colors from '../assets/color';

export const VectorIcon = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <WebView
        source={{uri: 'https://oblador.github.io/react-native-vector-icons/'}}
      />
      <ActivityIndicator color={colors.primary} />
    </View>
  );
};
