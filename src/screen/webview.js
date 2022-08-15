import React from 'react';
import {WebView} from 'react-native-webview';

const Web = () => {
  return (
    <WebView source={{uri: 'https://www.google.com'}} style={{flex: 1}} />
  )
}

export default Web;
