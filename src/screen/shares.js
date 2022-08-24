import React from 'react';
import {
  View,
  Share,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import colors from '../assets/color';

export const Shares = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native Android Application. Now Available on Play Store. Download now http://bit.ly/2URxDJQ',
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View>
      <TouchableOpacity style={styles.container1}>
        <Button title="Share " onPress={onShare} color={colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onShare}>
        <Image
          style={styles.container2}
          source={require('../image/share.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    justifyContent: 'center',
    margin: 30,
  },
  container2: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
});
