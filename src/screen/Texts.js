import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../component/Header/header';

class Texts extends Component {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
      'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/Texts.js',
    });
  };
  render() {
    return (
      <View>
        <Header headerTitle="Text" back={this.goBack} code={this.code} />
        <View
          style={{
            alignSelf: 'center',
            padding: 10,
            flex: 1,
            justifyContent: 'space-around',
          }}>
          <ScrollView>
            <Text>Default Text</Text>
            <Text style={{fontStyle: 'italic', marginTop: 16}}>
              italic Text
            </Text>
            <Text style={{fontWeight: 'bold', marginTop: 16}}>Bold Text</Text>
            <Text style={{fontSize: 10, marginTop: 16}}>Small Text</Text>
            <Text style={{fontSize: 25, marginTop: 16}}>Large Text</Text>
            <Text style={{color: 'red', marginTop: 16}}>Text Color</Text>
            <Text style={{color: 'green', marginTop: 16}}>Text Color</Text>
            <Text style={{textDecorationLine: 'line-through', marginTop: 16}}>
              Line through
            </Text>
            <Text
              style={{
                textDecorationLine: 'line-through',
                color: 'blue',
                marginTop: 16,
              }}>
              Line through Color
            </Text>
            <Text style={{textDecorationLine: 'underline', marginTop: 16}}>
              underline
            </Text>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: 'green',
                marginTop: 16,
              }}>
              underline Color
            </Text>
            <Text
              style={{
                textDecorationLine: 'underline line-through',
                marginTop: 16,
              }}>
              underline line-through
            </Text>
            <Text
              style={{
                textDecorationLine: 'underline line-through',
                color: 'red',
                marginTop: 16,
              }}>
              underline line-through
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Texts;
