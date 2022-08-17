import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

export const ScrollViews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content_top}>
        <Text style={styles.text_horizontal}>ScrollView Horizontal</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            resizeMode="center"
            style={styles.arrow}
            source={require('../image/right.png')}
          />
          <Image
            resizeMode="center"
            style={styles.arrow}
            source={require('../image/right.png')}
          />
          <Image
            resizeMode="center"
            style={styles.arrow}
            source={require('../image/right.png')}
          />
          <Image
            resizeMode="center"
            style={styles.arrow}
            source={require('../image/right.png')}
          />
          <Image
            resizeMode="center"
            style={styles.arrow}
            source={require('../image/right.png')}
          />
          <Image
            resizeMode="center"
            style={styles.arrow}
            source={require('../image/right.png')}
          />
        </ScrollView>
      </View>
      <View>
        <Text style={styles.text_vertical}>ScrollView Vertical</Text>
        <View style={styles.content_middle}>
          <ScrollView showsVerticalScrollIndicator={false} style={{}}>
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/down.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/down.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/down.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/down.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/down.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/down.png')}
            />
          </ScrollView>

          <ScrollView>
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/up.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/up.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/up.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/up.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/up.png')}
            />
            <Image
              resizeMode="center"
              style={styles.arrow}
              source={require('../image/up.png')}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 10,
    flexDirection: 'column',
  },
  content_top: {
    height: '25%',
  },
  text_horizontal: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_vertical: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  content_middle: {
    flexDirection: 'row',
  },
  arrow: {
    width: 150,
    height: 150,
    margin: 10,
  },
});
