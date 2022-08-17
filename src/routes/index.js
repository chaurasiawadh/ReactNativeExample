import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../assets/color';
import {Home} from '../screen/home';
import {Texts} from '../screen/text';
import {ScrollViews} from '../screen/scrollView';
import {Images} from '../screen/image';
import {FlatLists} from '../screen/flatListView';
import {Swipe} from '../screen/swipe/swipeView';
import {Pickers} from '../screen/picker';
import StatusBars from '../screen/statusBar';
import {Progress} from '../screen/progressView';
import {SectionLists} from '../screen/sectionLists';
import {Switches} from '../screen/switchView';
import {Web} from '../screen/webview';
import {Shares} from '../screen/shares';
import {Animations} from '../screen/animation';
import Multiple from '../screen/animation/multiple';
import {Fade} from '../screen/animation/fade';
import {Shadow} from '../screen/animation/shadow';
import {Loader} from '../screen/animation/loader';
import {ApiHome} from '../screen/api/apiHome';
import {VectorIcon} from '../screen/vectorIcons';
import RedditApi from '../screen/api/reddit/reddit';
import ScrollViewOpacity from '../screen/design/scrollViewOpacity';

import SlideMenu from './../slideMenu';
import Tutorial from './../tutorial/tutorial';
import Gits from './../screen/git';

// const urlCommon =
//   'https://raw.githubusercontent.com/chaurasiawadh/ReactNativeExample/master/src/';
const urlCommon =
  'https://github.com/chaurasiawadh/ReactNativeExample/tree/fix-functional-components/src';

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
  Tutorial: {screen: Tutorial, ...hideHeader},
  Git: {screen: Gits},
  Texts: {screen: Texts, ...code('Text', 'text.js')},
  ScrollViews: {screen: ScrollViews, ...code('ScrollView', 'scrollView.js')},
  Images: {screen: Images, ...code('Image', 'image.js')},
  FlatLists: {screen: FlatLists, ...code('FlatList', 'flatListView.js')},
  Swipe: {screen: Swipe, ...code('Swipe', 'swipe/swipeView.js')},
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
  Multiple: {
    screen: Multiple,
    ...code('Multiple Animation', 'animation/multiple.js'),
  },
  Fade: {screen: Fade, ...code('Fade Animation', 'animation/fade.js')},
  Shadow: {screen: Shadow, ...code('Shadow', 'animation/shadow.js')},
  Loader: {screen: Loader, ...code('Loader Animation', 'animation/loader.js')},
  ApiHome: {screen: ApiHome, ...code('Api', 'api/apiHome.js')},
  VectorIcon: {screen: VectorIcon, ...code('Vector Icons', 'vectorIcons.js')},
  RedditApi: {
    screen: RedditApi,
    ...code('Reddit Popular Api', 'api/reddit/reddit.js'),
  },
  ScrollViewOpacity: {
    screen: ScrollViewOpacity,
    ...code('ScrollView Opacity', 'design/scrollViewOpacity.js'),
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
