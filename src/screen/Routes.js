import {createStackNavigator, createDrawerNavigator} from "react-navigation";
import {Easing,Animated} from "react-native";

import SlideMenu from "../slideMenu/SlideMenu"
import Home from "./Home";
import Profile from "./Profile";
import Texts from "./Texts";
import Buttons from "./Buttons";
import Scroll from "./Scroll";
import Images from "./Images";
import Pickers from "./Pickers";
import Progress from "./Progress";
import SectionList from "./SectionList";
import Switch from "./Switch";
import Shares from "./Share";
import WebViews  from "./WebViews";
import StatusBars from "./StatusBars"
import Animations from "./Animations"

//git Page
import Gits from "./git"

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(10)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      });

      return { transform: [{ translateX }] };
    }
  };
};

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile},
    Texts: { screen: Texts},
    Buttons: { screen: Buttons},
    Scroll: { screen: Scroll},
    Images: {screen: Images},
    Pickers: { screen: Pickers},
    Progress: { screen: Progress},
    SectionList: { screen: SectionList},
    Switch: { screen: Switch},
    Shares :{ screen : Shares},
    WebViews: { screen: WebViews},
    StatusBars: { screen: StatusBars},
    Animations:{ screen: Animations},

    Git: { screen: Gits},
  },
  {
    transitionConfig
  }
);
const Drawer = createDrawerNavigator(
  {
    AppNavigator: { screen: AppNavigator }
  },
  {
    contentComponent: SlideMenu,
    gestureEnabled: true,
    drawerWidth: 250
  }
);
export default Drawer;
