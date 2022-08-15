import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../component/color';
import Home from '../screen/Home';
import Profile from '../screen/profile';
import Texts from '../screen/text';
import Scroll from '../screen/scroll';
import Images from '../screen/image';
import Pickers from '../screen/picker';
import Progress from '../screen/progress';
import SectionList from '../screen/sectionlist';
import Switch from '../screen/switch';
import Shares from '../screen/share';
import WebViews from '../screen/webview';
import StatusBars from '../screen/statusBar';
import VectorIcon from '../screen/vectorIcon';
import Animations from '../screen/animation';
import Shadow from '../screen/Animation/shadow';
import Fade from '../screen/Animation/fade';
import Multiple from '../screen/Animation/multiple';
import Loader from '../screen/Animation/loader';
import Swipe from '../screen/Swipe/Swipes';
import Storage from '../screen/Storage/index';
import FlatList from '../screen/flatlist';
import ApiHome from '../screen/Api/apiHome';
import RedditApi from '../screen/Api/Reddit/reddit';
import ScrollViewOpacity from '../screen/Api/Reddit/reddit';


import SlideMenu from './../slideMenu/slideMenu';
import Tutorial from './../tutorial/tutorial';



const hideHeader = {
  navigationOptions: () => ({
    header: <View />,
    headerStyle: {
      elevation: 0,
      marginTop: 20,
    },
  })
};

const code = (headerTitle, path) => {
  return {
    navigationOptions: ({ navigation }) => ({
      headerTitle,
      headerStyle: {
        backgroundColor: colors.primary,
        elevation: 0,
      },
      headerTintColor: '#fff',
      headerRight: (
        <TouchableOpacity>
          <Icon
            name="code"
            size={25}
            color="white"
            style={{ marginRight: 20 }}
            onPress={() =>
              navigation.navigate('Git', {
                url: urlCommon + `screen/${path}`,
              })
            }
          />
        </TouchableOpacity>
      ),
    }),
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home, ...hideHeader },
    Profile: { screen: Profile, ...hideHeader },
    Tutorial: { screen: Tutorial, ...hideHeader },
    Texts: { screen: Texts, ...code('Text', 'text.js') },
    Scroll: { screen: Scroll, ...code('ScrollView', 'scroll.js') },
    Images: { screen: Images, ...code('Image', 'image.js') },
    Pickers: { screen: Pickers, ...code('Picker', 'picker.js') },
    Progress: { screen: Progress, ...code('Progress Bar', 'progress.js') },
    SectionList: { screen: SectionList, ...code('SectionList', 'sectionlist.js') },
    Switch: { screen: Switch, ...code('Switch', 'switch.js') },
    Shares: { screen: Shares, ...code('Share', 'share.js') },
    WebViews: { screen: WebViews, ...code('WebView', 'webView.js') },
    StatusBars: { screen: StatusBars, ...code('StatusBar', 'statusBar.js') },
    VectorIcon: { screen: VectorIcon, ...code('Vector Icons', 'vectorIcon.js') },
    Animations: { screen: Animations, ...code('Animation', 'animation.js') },
    Shadow: { screen: Shadow, ...code('Shadow', 'Animation/shadow.js') },
    Fade: { screen: Fade, ...code('Fade Animation', 'Animation/fade.js') },
    Multiple: { screen: Multiple, ...code('Multiple Animation', 'Animation/multiple.js') },
    Loader: { screen: Loader, ...code('Loader Animation', 'Animation/loader.js') },
    Swipe: { screen: Swipe, ...code('Swipe', 'Swipe/Swipes.js') },
    Storage: { screen: Storage, ...code('Storage', 'Storage/index.js') },
    FlatList: { screen: FlatList, ...code('FlatList', 'flatlist.js') },
    ApiHome: { screen: ApiHome, ...code('Api', 'Api/apiHome.js') },
    RedditApi: { screen: RedditApi, ...code('Reddit Popular Api', 'Api/Reddit/reddit.js') },
    ScrollViewOpacity: { screen: ScrollViewOpacity, ...code('ScrollView Opacity', 'Api/Reddit/reddit.js') },

  });

export const Routes = createDrawerNavigator(
  {
    AppNavigator: { screen: AppNavigator },
  },
  {
    contentComponent: SlideMenu,
    gestureEnabled: true,
    drawerWidth: 250,
  },
);
