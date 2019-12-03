import React from 'react';
import {Easing, Animated, View} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import SlideMenu from '../slideMenu/SlideMenu';
import Home from './Home';
import Profile from './Profile';
import Texts from './Texts';
import Buttons from './Buttons';
import Scroll from './Scroll';
import Images from './Images';
import Pickers from './Pickers';
import Progress from './Progress';
import SectionList from './SectionList';
import Switch from './Switch';
import Shares from './Share';
import WebViews from './WebViews';
import StatusBars from './StatusBars';
import Animations from './Animations';
import VectorIcon from './VectorIcon';

//Animation
import shadow from '../component/Animation/shadow';
import zoom from '../component/Animation/zoom';
import fade from '../component/Animation/fade';
import loader from '../component/Animation/loader';

//Slide List left-right
import swipe from '../component/swipe/swipe';

//Local Storage
import storage from '../component/Storage/index';

//Flatlist
import flatList from '../screen/flatList';

//git Page
import Gits from './git';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(10)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return {transform: [{translateX}]};
    },
  };
};

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    Texts: {
      screen: Texts,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    Buttons: {
      screen: Buttons,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    Scroll: {
      screen: Scroll,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    Images: {
      screen: Images,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    Pickers: {
      screen: Pickers,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    Progress: {
      screen: Progress,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    SectionList: {
      screen: SectionList,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    Switch: {
      screen: Switch,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    Shares: {
      screen: Shares,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    WebViews: {
      screen: WebViews,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    StatusBars: {
      screen: StatusBars,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },

    VectorIcon: {
      screen: VectorIcon,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },

    Git: {screen: Gits},

    //Animaton
    Animations: {
      screen: Animations,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    shadow: {
      screen: shadow,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    fade: {
      screen: fade,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    zoom: {
      screen: zoom,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
    loader: {
      screen: loader,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },

    //Swipe
    swipe: {
      screen: swipe,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },

    //Storage
    storage: {
      screen: storage,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },

    //FlatList
    flatList: {
      screen: flatList,
      navigationOptions: () => ({
        header: <View />,
        headerStyle: {
          elevation: 0,
          marginTop: 20,
        },
      }),
    },
  },
  {
    transitionConfig,
  },
);
const Drawer = createDrawerNavigator(
  {
    AppNavigator: {screen: AppNavigator},
  },
  {
    contentComponent: SlideMenu,
    gestureEnabled: true,
    drawerWidth: 250,
  },
);
export default Drawer;
