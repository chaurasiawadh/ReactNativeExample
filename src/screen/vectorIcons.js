import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {View, ActivityIndicator} from 'react-native';
import colors from '../assets/color';

export const VectorIcon = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View
      style={{flex: 1, backgroundColor: colors.white, position: 'relative'}}>
      {isLoading && (
        <ActivityIndicator
          color={colors.primary}
          size={60}
          style={{position: 'absolute', top: 120, zIndex: 1, width: '100%'}}
        />
      )}
      <WebView
        onLoadEnd={() => setIsLoading(false)}
        source={{uri: 'https://oblador.github.io/react-native-vector-icons/'}}
      />
    </View>
  );
};
