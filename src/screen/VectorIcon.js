import React, {Component} from 'react';
import {TouchableOpacity, ActivityIndicator, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../componenet/Color';

export default class VectorIcons extends Component {
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
          color="white"
          style={{marginRight: 20}}
          onPress={() =>
            navigation.navigate('Git', {
              url:
                'https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/VectorIcon.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <View>
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
