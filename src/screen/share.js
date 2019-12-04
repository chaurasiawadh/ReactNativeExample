import React, {Component} from 'react';
import {View, Share, Button, TouchableOpacity, Image} from 'react-native';
import colors from '../component/color';

class Shares extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native Example Android Application. Now Available on Play Store. Download now http://bit.ly/2URxDJQ',
      });
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
export default Shares;
