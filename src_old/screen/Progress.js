import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ProgressBarAndroid,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../componenet/Color';

export default class Progess extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'ProgressBarAndroid',
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
                'https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/Progress.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });
  render() {
    return (
      <View style={{alignSelf: 'center', padding: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          Show ProgressBarAndroid
        </Text>
        <View style={{flex: 1, justifyContent: 'space-evenly', padding: 20}}>
          <ProgressBarAndroid styleAttr="Small" color="#2196F3" />
          <ProgressBarAndroid />
          <ProgressBarAndroid animating={true} color="red" />
          <ProgressBarAndroid styleAttr="Horizontal" />
          <ProgressBarAndroid styleAttr="Horizontal" color="black" />
          <ProgressBarAndroid
            color="blue"
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.7}
          />
        </View>
      </View>
    );
  }
}
