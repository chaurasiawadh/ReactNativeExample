import React, {Component} from 'react';
import {View, Share, Button, TouchableOpacity, Image} from 'react-native';
import colors from '../component/Color';
import Header from '../component/Header/header';

class Shares extends Component {
  
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
        'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/Share.js',
    });
  };

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
        <Header headerTitle="Share" back={this.goBack} code={this.code} />
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
export default Shares;
