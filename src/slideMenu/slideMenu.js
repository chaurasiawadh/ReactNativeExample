import React, {Component} from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../component/color';

let list = [
  {name: 'Text', click: 'Texts', icons: 'book'},
  // {name: 'Button', click: 'Buttons', icons: 'book'},
  {name: 'Scroll View', click: 'Scroll', icons: 'book'},
  {name: 'Image', click: 'Images', icons: 'book'},
  {name: 'Animation', click: 'Animations', icons: 'book'},
  {name: 'Flatlist', click: 'flatList', icons: 'book'},
  {name: 'Swipe List', click: 'swipe', icons: 'book'},
  {name: 'Picker', click: 'Pickers', icons: 'book'},
  {name: 'StatusBar', click: 'StatusBars', icons: 'book'},
  {name: 'Storage', click: 'storage', icons: 'book'},
  {name: 'Progress Bar', click: 'Progress', icons: 'book'},
  {name: 'SectionList', click: 'SectionList', icons: 'book'},
  {name: 'Switch', click: 'Switch', icons: 'book'},
  {name: 'WebView', click: 'WebViews', icons: 'book'},
  {name: 'Share', click: 'Shares', icons: 'book'},
  // {name: 'Vector Icon', click: 'VectorIcon', icons: 'book'},
];

export default class slideMenu extends Component {
  playStore =  () => {
    let link = 'https://play.google.com/store/apps/details?id=com.ravi'
    Linking.canOpenURL(link).then(supported => {
        supported && Linking.openURL(link);
    }, (err) => console.log(err));
}
  render() {
    return (
      <View>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.playStore()}
            style={styles.card}>
            <Text style={{color: colors.white, fontSize: 22}}>
              React Native
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.subCard}>
            <Icon name="home" size={20} />
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>
          {list.map(item => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(item.click)}
              style={styles.subCard}>
              <Icon name={item.icons} size={20} />
              <Text style={styles.txt}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    padding: 50,
    borderRadius: 2,
  },
  subCard: {
    backgroundColor: colors.white,
    padding: 10,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  txt: {
    marginLeft: 10,
  },
});
