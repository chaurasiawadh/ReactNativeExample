import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

class Images extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ padding: 10 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              style={{ height: 200, width: '100%' }}
              source={require('../image/girl.jpg')}
            />
            <TouchableOpacity>
              <Image
                style={{ height: 200, width: '100%', marginTop: 20 }}
                source={require('../image/girl.jpg')}
              />
            </TouchableOpacity>
            <View style={{ marginTop: 20, flexDirection: 'row' }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image
                  style={{ height: 200, width: 200 }}
                  source={require('../image/girl.jpg')}
                />
                <Image
                  style={{ height: 100, width: 100, marginLeft: 10 }}
                  source={require('../image/girl.jpg')}
                />
                <Image
                  style={{ height: 50, width: 50, marginLeft: 10 }}
                  source={require('../image/girl.jpg')}
                />
              </ScrollView>
            </View>
            <View style={{ marginTop: 10, marginBottom: 40 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 500 / 2,
                    marginLeft: 10,
                    marginTop: 30,
                  }}
                  source={require('../image/girl.jpg')}
                />

                <Image
                  style={{
                    height: 140,
                    width: 140,
                    borderRadius: 300 / 2,
                    marginLeft: 10,
                  }}
                  source={require('../image/girl.jpg')}
                />

                <Image
                  style={{
                    height: 200,
                    width: 200,
                    borderRadius: 30 / 2,
                    marginBottom: 20,
                    marginLeft: 20,
                  }}
                  source={require('../image/girl.jpg')}
                />
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default Images;
