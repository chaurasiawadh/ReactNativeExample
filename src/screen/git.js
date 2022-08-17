import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

import colors from '../assets/color'

export default class Gits extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Code load',
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',  
  });

  state = {
    url: this.props.navigation.state.params.url,
  };

  render() {
    return <WebView source={{uri: this.state.url}} style={{flex: 1}} />;
  }
}
