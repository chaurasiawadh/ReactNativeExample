import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
// import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../componenet/Color';

export default class WebViews extends Component {
  // static navigationOptions = ({navigation}) => ({
  //   headerTitle: 'WebView',
  //   headerStyle: {
  //     backgroundColor: colors.primary,
  //     elevation: 0,
  //   },
  //   headerTintColor: '#fff',
  //   headerRight: (
  //     <TouchableOpacity>
  //       <Icon
  //         name="code"
  //         size={25}
  //         color="white"
  //         style={{marginRight: 20}}
  //         onPress={() =>
  //           navigation.navigate('Git', {
  //             url:
  //               'https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/WebViews.js',
  //           })
  //         }
  //       />
  //     </TouchableOpacity>
  //   ),
  // });
  render() {
    return (
      // <WebView source={{uri: 'https://www.google.com'}} style={{flex: 1}} />
      <View>
        <Text>Hii</Text>
        </View>
    );
  }
}
