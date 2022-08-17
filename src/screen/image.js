import React from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export const Images = () => {
  return (
    <ScrollView>
      <View style={styles.container_1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.image_1} source={require('../image/girl.jpg')} />
          <TouchableOpacity>
            <Image
              style={styles.image_2}
              source={require('../image/girl.jpg')}
            />
          </TouchableOpacity>
          <View style={styles.container_2}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                style={styles.image_3}
                source={require('../image/girl.jpg')}
              />
              <Image
                style={styles.image_4}
                source={require('../image/girl.jpg')}
              />
              <Image
                style={styles.image_5}
                source={require('../image/girl.jpg')}
              />
            </ScrollView>
          </View>
          <View style={styles.container_3}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                style={styles.image_6}
                source={require('../image/girl.jpg')}
              />

              <Image
                style={styles.image_7}
                source={require('../image/girl.jpg')}
              />

              <Image
                style={styles.image_8}
                source={require('../image/girl.jpg')}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container_1: {
    padding: 10,
  },
  image_1: {
    height: 200,
    width: '100%',
  },
  image_2: {
    height: 200,
    width: '100%',
    marginTop: 20,
  },
  container_2: {
    marginTop: 20,
    flexDirection: 'row',
  },
  image_3: {
    height: 200,
    width: 200,
  },
  image_4: {
    height: 100,
    width: 100,
    marginLeft: 10,
  },
  image_5: {
    height: 50,
    width: 50,
    marginLeft: 10,
  },
  container_3: {
    marginTop: 10,
    marginBottom: 40,
  },
  image_6: {
    height: 40,
    width: 40,
    borderRadius: 500 / 2,
    marginLeft: 10,
    marginTop: 30,
  },
  image_7: {
    height: 140,
    width: 140,
    borderRadius: 300 / 2,
    marginLeft: 10,
  },
  image_8: {
    height: 200,
    width: 200,
    borderRadius: 30 / 2,
    marginBottom: 20,
    marginLeft: 20,
  },
});
