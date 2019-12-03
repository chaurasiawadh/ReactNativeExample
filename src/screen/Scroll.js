import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Header from '../component/Header/header';

class ScrollViews extends Component {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
        'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/Scroll.js',
    });
  };

  render() {
    return (
      <View>
        <Header headerTitle="ScrollView" back={this.goBack} code={this.code} />

        <View
          style={{alignSelf: 'center', padding: 10, flexDirection: 'column'}}>
          <View style={{height: '25%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              ScrollView Horizontal
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/right.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/right.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/right.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/right.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/right.png')}
              />
              <Image
                resizeMode="center"
                style={{width: 150, height: 150, margin: 10}}
                source={require('../image/right.png')}
              />
            </ScrollView>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              ScrollView Vertical
            </Text>
            <View style={{flexDirection: 'row'}}>
              <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/down.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/down.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/down.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/down.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/down.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/down.png')}
                />
              </ScrollView>

              <ScrollView>
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/up.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/up.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/up.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/up.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/up.png')}
                />
                <Image
                  resizeMode="center"
                  style={{width: 150, height: 150, margin: 10}}
                  source={require('../image/up.png')}
                />
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ScrollViews;
