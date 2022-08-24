import React, {useState} from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { BAR_CHARTS, DEFAULT_LIST, MENU_LIST, PIE_CHARTS, STOCKS_CHARTS } from './constants';
import colors from '../assets/color';

const renderIcons = item => {
  switch (item.type) {
    case 'FontAwesome5':
      return <Icon name={item.icons} color={colors.primary} size={20} />;
    case 'MaterialCommunityIcons':
      return (
        <MaterialIcon name={item.icons} color={colors.primary} size={20} />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons name={item.icons} color={colors.primary} size={20} />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons name={item.icons} color={colors.primary} size={20} />
      );
    case 'Fontisto':
      return <Fontisto name={item.icons} color={colors.primary} size={20} />;
    case 'AntDesign':
      return <AntDesign name={item.icons} color={colors.primary} size={20} />;

    default:
      return <Icon name={item.icons} color={colors.primary} size={20} />;
  }
};

export const SlideMenu = ({navigation}) => {
  const [toggleDown, setToggleDown] = useState(false);
  const [toggleDown2, setToggleDown2] = useState(false);
  const [toggleDown3, setToggleDown3] = useState(false);
  const [toggleDown4, setToggleDown4] = useState(false);

  const playStore = () => {
    let link = 'https://play.google.com/store/apps/details?id=com.ravi';
    Linking.canOpenURL(link).then(
      supported => {
        supported && Linking.openURL(link);
      },
      err => console.log(err),
    );
  };

  const toggleSideMenuFolderList = () => {
    setToggleDown(preState => !preState);
  };
  const toggleSideMenuFolderList2 = () => {
    setToggleDown2(preState => !preState);
  };
  const toggleSideMenuFolderList3 = () => {
    setToggleDown3(preState => !preState);
  };
  const toggleSideMenuFolderList4 = () => {
    setToggleDown4(preState => !preState);
  };

  return (
    <View style={{paddingBottom: 30}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => playStore()} style={styles.card}>
          <Text style={{color: colors.white, fontSize: 22}}>React Native</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.subCard}>
          <Icon name="home" color={colors.primary} size={20} />
          <Text style={styles.txt}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => toggleSideMenuFolderList3()}
          style={styles.element}>
          <View style={styles.sub}>
            <Icon name="chart-bar" color={colors.primary} size={20} />
            <Text style={styles.txt}>Bar Charts</Text>
          </View>
          {toggleDown3 ? (
            <Icon name="caret-up" color={colors.primary} size={20} />
          ) : (
            <Icon name="caret-down" color={colors.primary} size={20} />
          )}
        </TouchableOpacity>

        {toggleDown3 ? (
          <View>
            {BAR_CHARTS.map(item => (
              <TouchableOpacity
                key={item.name}
                onPress={() => navigation.navigate(item.click)}
                style={[styles.subCard, {marginLeft: 16}]}>
                {renderIcons(item)}
                <Text style={styles.txt}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        <TouchableOpacity
          onPress={() => toggleSideMenuFolderList2()}
          style={styles.element}>
          <View style={styles.sub}>
            <Icon name="chart-line" color={colors.primary} size={20} />
            <Text style={styles.txt}>Stock Charts</Text>
          </View>
          {toggleDown2 ? (
            <Icon name="caret-up" color={colors.primary} size={20} />
          ) : (
            <Icon name="caret-down" color={colors.primary} size={20} />
          )}
        </TouchableOpacity>

        {toggleDown2 ? (
          <View>
            {STOCKS_CHARTS.map(item => (
              <TouchableOpacity
                key={item.name}
                onPress={() => navigation.navigate(item.click)}
                style={[styles.subCard, {marginLeft: 16}]}>
                {renderIcons(item)}
                <Text style={styles.txt}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        <TouchableOpacity
          onPress={() => toggleSideMenuFolderList4()}
          style={styles.element}>
          <View style={styles.sub}>
            <Icon name="chart-pie" color={colors.primary} size={20} />
            <Text style={styles.txt}>Pie Charts</Text>
          </View>
          {toggleDown4 ? (
            <Icon name="caret-up" color={colors.primary} size={20} />
          ) : (
            <Icon name="caret-down" color={colors.primary} size={20} />
          )}
        </TouchableOpacity>

        {toggleDown4 ? (
          <View>
            {PIE_CHARTS.map(item => (
              <TouchableOpacity
                key={item.name}
                onPress={() => navigation.navigate(item.click)}
                style={[styles.subCard, {marginLeft: 16}]}>
                {renderIcons(item)}
                <Text style={styles.txt}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        <TouchableOpacity
          onPress={() => toggleSideMenuFolderList()}
          style={styles.element}>
          <View style={styles.sub}>
            <Icon name="book-reader" color={colors.primary} size={20} />
            <Text style={styles.txt}>Default Component</Text>
          </View>
          {toggleDown ? (
            <Icon name="caret-up" color={colors.primary} size={20} />
          ) : (
            <Icon name="caret-down" color={colors.primary} size={20} />
          )}
        </TouchableOpacity>

        {toggleDown ? (
          <View>
            {DEFAULT_LIST.map(item => (
              <TouchableOpacity
                key={item.name}
                onPress={() => navigation.navigate(item.click)}
                style={[styles.subCard, {marginLeft: 16}]}>
                <Icon name={item.icons} color={colors.primary} size={20} />
                <Text style={styles.txt}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        {MENU_LIST.map(item => (
          <TouchableOpacity
            key={item.name}
            onPress={() => navigation.navigate(item.click)}
            style={styles.subCard}>
            <Icon name={item.icons} color={colors.primary} size={20} />
            <Text style={styles.txt}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

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
