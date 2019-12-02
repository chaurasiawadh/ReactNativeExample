import React, {Component} from 'react';
import {View, Share, Button, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../componenet/Color';

export default class Shares extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Share',
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
                'https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/Share.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native Example Android Application. Now Available on Play Store. Download now http://bit.ly/2URxDJQ',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    return (
      <View>
        <TouchableOpacity style={{justifyContent: 'center', margin: 30}}>
          <Button
            title="Share "
            onPress={this.onShare}
            color={colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onShare}>
          <Image
            style={{height: 200, width: 200, alignSelf: 'center'}}
            source={require('../image/share.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
