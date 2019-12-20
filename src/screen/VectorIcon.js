import React, {Component} from 'react';
import { TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import colors from '../component/color';
import Icon from 'react-native-vector-icons/FontAwesome';


class VectorIcon extends Component {
  
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <WebView source={{uri: 'https://oblador.github.io/react-native-vector-icons/'}} />
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }
}
export default VectorIcon;
