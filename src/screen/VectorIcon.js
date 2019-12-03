import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

import Header from '../component/Header/header';

class VectorIcon extends Component {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
        'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src//screen/VectorIcon.js',
    });
  };
  render() {
    return (
      <View>
        <Header headerTitle="Vector Icon" back={this.goBack} code={this.code} />
        <WebView
          source={{
            uri: 'https://oblador.github.io/react-native-vector-icons/',
          }}
          style={{flex: 1}}
        />
      </View>
    );
  }
}
export default VectorIcon;
