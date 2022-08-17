import React, { Component } from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome5';

const list = [
  { name: 'Animation', click: 'Animations', icons: 'book' },
  { name: 'Api', click: 'ApiHome', icons: 'book' },
  { name: 'Vector Icon', click: 'VectorIcon', icons: 'book' },
];

const subList = [
  { name: 'Text', click: 'Texts', icons: 'book' },
  { name: 'Scroll View', click: 'ScrollViews', icons: 'book' },
  { name: 'Image', click: 'Images', icons: 'book' },
  { name: 'FlatList', click: 'FlatLists', icons: 'book' },
  { name: 'Swipe List', click: 'Swipe', icons: 'book' },
  { name: 'Picker', click: 'Pickers', icons: 'book' },
  { name: 'StatusBar', click: 'StatusBars', icons: 'book' },
  { name: 'Progress Bar', click: 'Progress', icons: 'book' },
  { name: 'SectionList', click: 'SectionLists', icons: 'book' },
  { name: 'Switch', click: 'Switch', icons: 'book' },
  { name: 'WebView', click: 'Web', icons: 'book' },
  { name: 'Share', click: 'Shares', icons: 'book' },
];

const designList = [
  { name: 'ScrollView', click: 'ScrollViewOpacity', icons: 'book' },

];

class SlideMenu extends Component {
  constructor() {
    super();
    this.state = {
      toggleDown: false,
      toggleDown2: false
    };
  }
  playStore = () => {
    let link = 'https://play.google.com/store/apps/details?id=com.ravi';
    Linking.canOpenURL(link).then(
      supported => {
        supported && Linking.openURL(link);
      },
      err => console.log(err),
    );
  };

  toggleSideMenuFolderList = () => {
    this.setState({ toggleDown: !this.state.toggleDown });
  };
  toggleSideMenuFolderList2 = () => {
    this.setState({ toggleDown2: !this.state.toggleDown2 });
  };

  render() {
    return (
      <View style={{ paddingBottom: 30 }}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.playStore()}
            style={styles.card}>
            <Text style={{ color: colors.white, fontSize: 22 }}>
              React Native
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.subCard}>
            <Icon name="home" color={colors.primary} size={20} />
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.toggleSideMenuFolderList()}
            style={styles.element}>
            <View style={styles.sub}>
              <Icon name="book" color={colors.primary} size={20} />
              <Text style={styles.txt}>Default Component</Text>
            </View>
            {this.state.toggleDown ?
              <Icon name="caret-up" color={colors.primary} size={20} />
              :
              <Icon name="caret-down" color={colors.primary} size={20} />
            }
          </TouchableOpacity>

          {this.state.toggleDown ? (
            <View>
              {subList.map(item => (
                <TouchableOpacity
                  key={item.name}
                  onPress={() => this.props.navigation.navigate(item.click)}
                  style={[styles.subCard, { marginLeft: 16 }]}>
                  <Icon name={item.icons} color={colors.primary} size={20} />
                  <Text style={styles.txt}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}

          {list.map(item => (
            <TouchableOpacity
              key={item.name}
              onPress={() => this.props.navigation.navigate(item.click)}
              style={styles.subCard}>
              <Icon name={item.icons} color={colors.primary} size={20} />
              <Text style={styles.txt}>{item.name}</Text>
            </TouchableOpacity>
          ))}


          <TouchableOpacity
            onPress={() => this.toggleSideMenuFolderList2()}
            style={styles.element}>
            <View style={styles.sub}>
              <Icon name="book" color={colors.primary} size={20} />
              <Text style={styles.txt}>Design App</Text>
            </View>
            {this.state.toggleDown2 ?
              <Icon name="caret-up" color={colors.primary} size={20} />
              :
              <Icon name="caret-down" color={colors.primary} size={20} />
            }
          </TouchableOpacity>

          {this.state.toggleDown2 ? (
            <View>
              {designList.map(item => (
                <TouchableOpacity
                  key={item.name}
                  onPress={() => this.props.navigation.navigate(item.click)}
                  style={[styles.subCard, { marginLeft: 16 }]}>
                  <Icon name={item.icons} color={colors.primary} size={20} />
                  <Text style={styles.txt}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}

        </ScrollView>
      </View>
    );
  }
}

export default SlideMenu;

const styles = StyleSheet.create({
  card: {
    padding: 50,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
  element: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  subCard: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    backgroundColor: colors.white,
  },
  sub: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  txt: {
    marginLeft: 10,
  },
});
