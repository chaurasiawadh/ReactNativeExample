import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import Header from '../component/Header/header';

class WebViews extends Component {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
        'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/WebViews.js',
    });
  };

  render() {
    return (
      <View>
        <Header headerTitle="WebView" back={this.goBack} code={this.code} />
        <WebView source={{uri: 'https://www.google.com'}} style={{flex: 1}} />
      </View>
    );
  }
}
export default WebViews;
