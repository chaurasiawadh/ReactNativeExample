import React, {Component} from 'react';
// import {WebView} from 'react-native-webview';
import {View, Text} from "react-native"
import colors from '../component/Color';

export default class Gits extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Github Code',
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',
  });

  state = {
    url: this.props.navigation.state.params.url,
  };

  //<WebView source={{uri: this.state.url}} style={{flex: 1}} />;
  render() {
    return <View>
      <Text>HIHIH</Text>
      </View>
        
  }
}
