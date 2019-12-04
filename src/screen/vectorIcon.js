import React, {Component} from 'react';
import { TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import colors from '../component/color';
import Icon from 'react-native-vector-icons/FontAwesome';

var htmlCode =
  '<!DOCTYPE html><html><body><p>The code element does not preserve whitespace and line-breaks.</p><p>To fix this, you can put the code element inside a pre element:</p><pre><code>x = 5;y = 6;z = x + y;</code></pre></body></html>';

class VectorIcon extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Vector Icons',
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity>
        <Icon
          name="code"
          size={25}
          style={{marginRight: 20}}
          color="white"
          onPress={() =>
            navigation.navigate('Git', {
              url:
                'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src//screen/VectorIcon.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <WebView
        ref={'webview'}
        automaticallyAdjustContentInsets={false}
        html={htmlCode}
      />
    );
  }
}
export default VectorIcon;
