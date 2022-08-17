import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../assets/color';
import {Home} from '../screen/Home';
// import Profile from '../screen/profile';
import {Texts} from '../screen/text';
import {ScrollViews} from '../screen/scrollView';
import {Images} from '../screen/image';
import {FlatLists} from '../screen/flatListView';
import {Swipe} from '../screen/Swipe/Swipes';
import {Pickers} from '../screen/picker';
import StatusBars from '../screen/statusBar';
import {Progress} from '../screen/progressView';
import {SectionLists} from '../screen/sectionLists';
import {Switches} from '../screen/switchView';
import {Web} from '../screen/webview';
import {Shares} from '../screen/shares';
import {Animations} from '../screen/animation';
//import Multiple from '../screen/Animation/multiple';
import {Fade} from '../screen/Animation/fade';
import {Shadow} from '../screen/Animation/shadow';
 import {Loader} from '../screen/Animation/loader';
import {Storage} from '../screen/Storage/index';
import {ApiHome} from '../screen/Api/apiHome';
import {VectorIcon} from '../screen/vectorIcons';
import RedditApi from '../screen/Api/Reddit/reddit';
import ScrollViewOpacity from '../screen/Design/scrollViewOpacity';

import SlideMenu from './../slideMenu';
import Tutorial from './../tutorial/tutorial';
import Gits from './../screen/git';

const urlCommon =
  'https://raw.githubusercontent.com/chaurasiawadh/ReactNativeExample/master/src/';
const hideHeader = {
  navigationOptions: () => ({
    header: <View />,
    headerStyle: {
      elevation: 0,
      marginTop: 20,
    },
  }),
};

const code = (headerTitle, path) => {
  return {
    navigationOptions: ({navigation}) => ({
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
            style={{marginRight: 20}}
            onPress={() =>
              navigation.navigate('Git', {
                url: urlCommon + `screen/${path}`,
              })
            }
          />
        </TouchableOpacity>
      ),
    }),
  };
};

const AppNavigator = createStackNavigator({
  Home: {screen: Home, ...hideHeader},
  // Profile: { screen: Profile, ...hideHeader },
  Tutorial: {screen: Tutorial, ...hideHeader},
  Git: {screen: Gits},
  Texts: {screen: Texts, ...code('Text', 'text.js')},
  ScrollViews: {screen: ScrollViews, ...code('ScrollView', 'scrollView.js')},
  Images: {screen: Images, ...code('Image', 'image.js')},
  FlatLists: {screen: FlatLists, ...code('FlatList', 'flatListView.js')},
  Swipe: {screen: Swipe, ...code('Swipe', 'Swipe/Swipes.js')},
  Pickers: {screen: Pickers, ...code('Picker', 'picker.js')},
  StatusBars: {screen: StatusBars, ...code('StatusBar', 'statusBar.js')},
  Progress: {screen: Progress, ...code('Progress Bar', 'progressView.js')},
  SectionLists: {
    screen: SectionLists,
    ...code('SectionList', 'sectionLists.js'),
  },
  Switch: {screen: Switches, ...code('Switch', 'switchView.js')},
  WebViews: {screen: Web, ...code('WebView', 'webView.js')},
  Shares: {screen: Shares, ...code('Share', 'shares.js')},
  Animations: {screen: Animations, ...code('Animation', 'animation.js')},
  //  Multiple: { screen: Multiple, ...code('Multiple Animation', 'Animation/multiple.js') },
  Fade: {screen: Fade, ...code('Fade Animation', 'Animation/fade.js')},
  Shadow: { screen: Shadow, ...code('Shadow', 'Animation/shadow.js') },
   Loader: { screen: Loader, ...code('Loader Animation', 'Animation/loader.js') },
  //  Storage: { screen: Storage, ...code('Storage', 'Storage/index.js') },
  ApiHome: {screen: ApiHome, ...code('Api', 'Api/apiHome.js')},
  VectorIcon: {screen: VectorIcon, ...code('Vector Icons', 'vectorIcons.js')},
  RedditApi: {
    screen: RedditApi,
    ...code('Reddit Popular Api', 'Api/Reddit/reddit.js'),
  },
  ScrollViewOpacity: {
    screen: ScrollViewOpacity,
    ...code('ScrollView Opacity', 'Design/scrollViewOpacity.js'),
  },
});

export const Routes = createDrawerNavigator(
  {
    AppNavigator: {screen: AppNavigator},
  },
  {
    contentComponent: SlideMenu,
    gestureEnabled: true,
    drawerWidth: 250,
  },
);
