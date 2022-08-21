import React, {Component, useEffect} from 'react';
import {WebView} from 'react-native-webview';

import colors from '../assets/color';

export const Git = ({navigation}) => {
    const navigationOptions = () => ({
    headerTitle: navigation.state.params.title,
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',
  });

 useEffect(() => {
  navigationOptions();
 }, [])

  return (
    <WebView
      source={{uri: navigation.state.params.url}}
      style={{flex: 1}}
      scalesPageToFit={false}
    />
  );
};

// export default class Gits extends Component {
//   static navigationOptions = ({navigation}) => ({
//     headerTitle: navigation.state.params.title,
//     headerStyle: {
//       backgroundColor: colors.primary,
//       elevation: 0,
//     },
//     headerTintColor: '#fff',
//   });

//   state = {
//     url: this.props.navigation.state.params.url,
//     jsCode: `window.ReactNativeWebView.postMessage(document.getElementsByTagName('pre'))`,
//   };

//   render() {
//     return (
//       <WebView
//         source={{uri: this.state.url}}
//         style={{flex: 1}}
//         scalesPageToFit={false}
//       />
//     );
//   }
// }
