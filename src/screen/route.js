// import React from 'react';
// import colors from '../component/color';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Easing, Animated, View, TouchableOpacity } from 'react-native';
// import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

// import Home from './Home';
// import Texts from './text';
// import Shares from './share';
// import Images from './image';
// import Switch from './switch';
// import Scroll from './scroll';
// import Pickers from './picker';
// import Profile from './profile';
// import WebViews from './webview';
// import Progress from './progress';
// import StatusBars from './statusBar';
// import Animations from './animation';
// import VectorIcon from './vectorIcon';
// import SectionList from './sectionlist';
// import SlideMenu from '../slideMenu/SlideMenu';

// //Animation
// import shadow from '../component/Animation/shadow';
// import Multiple from '../component/Animation/multiple';
// import fade from '../component/Animation/fade';
// import loader from '../component/Animation/loader';

// //Slide List left-right
// import swipe from '../component/Swipe/Swipes';

// //Local Storage
// import storage from '../component/Storage/index';

// //Flatlist
// import flatList from './flatlist';

// //git Page
// import Gits from './git';
// import Tutorial from '../tutorial/tutorial';

// //API
// import ApiHome from '../component/Api/apiHome';
// import RedditApi from '../component/Api/Reddit/reddit';

// //Design
// import ScrollViewOpacity from '../component/Design/scrollViewOpacity';

// const transitionConfig = () => {
//   return {
//     transitionSpec: {
//       duration: 750,
//       easing: Easing.out(Easing.poly(10)),
//       timing: Animated.timing,
//       useNativeDriver: true,
//     },
//     screenInterpolator: sceneProps => {
//       const { layout, position, scene } = sceneProps;
//       const thisSceneIndex = scene.index;
//       const width = layout.initWidth;
//       const translateX = position.interpolate({
//         inputRange: [thisSceneIndex - 1, thisSceneIndex],
//         outputRange: [width, 0],
//       });

//       return { transform: [{ translateX }] };
//     },
//   };
// };

// const urlCommon =
//   'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/';

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: () => ({
//         header: <View />,
//         headerStyle: {
//           elevation: 0,
//           marginTop: 20,
//         },
//       }),

//     },
//     Profile: {
//       screen: Profile,
//       navigationOptions: () => ({
//         header: <View />,
//         headerStyle: {
//           elevation: 0,
//           marginTop: 20,
//         },
//       }),
//     },
//     Texts: {
//       screen: Texts,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Text',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/text.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     Scroll: {
//       screen: Scroll,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'ScrollView',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/scroll.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     Images: {
//       screen: Images,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Image',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/image.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     Pickers: {
//       screen: Pickers,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Picker',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/picker.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     Progress: {
//       screen: Progress,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Progress Bar',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/progress.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     SectionList: {
//       screen: SectionList,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'SectionList',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/sectionlist.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     Switch: {
//       screen: Switch,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Switch',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/switch.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     Shares: {
//       screen: Shares,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Share',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/share.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     WebViews: {
//       screen: WebViews,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'WebView',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/webview.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     StatusBars: {
//       screen: StatusBars,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'StatusBar',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/statusBar.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },

//     VectorIcon: {
//       screen: VectorIcon,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Vector Icons',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/vectorIcon.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },

//     Git: { screen: Gits },

//     //Animaton
//     Animations: {
//       screen: Animations,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Animation',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/animation.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     shadow: {
//       screen: shadow,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Shadow',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'component/Animation/shadow.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     fade: {
//       screen: fade,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Fade Animation',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               style={{ marginRight: 20 }}
//               color="white"
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'component/Animation/fade.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     Multiple: {
//       screen: Multiple,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Multiple Animation',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               style={{ marginRight: 20 }}
//               color="#fff"
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'component/Animation/multiple.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     loader: {
//       screen: loader,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Loader Animation',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'component/Animation/loader.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },

//     //Swipe
//     swipe: {
//       screen: swipe,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Swipe',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },

//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'component/Swipe/Swipes.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },

//     //Storage
//     storage: {
//       screen: storage,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Storage',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               style={{ marginRight: 20 }}
//               color="white"
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'component/Storage/index.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },

//     //FlatList
//     flatList: {
//       screen: flatList,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'FlatList',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'screen/flatList.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },

//     ApiHome: {
//       screen: ApiHome,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'API',
//         headerLeft: null,
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'component/Api/apiHome.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//     RedditApi: {
//       screen: RedditApi,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Reddit Popular Api',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'component/Api/Reddit/reddit.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },

//     Tutorial: {
//       screen: Tutorial,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'Tutorial',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0,
//         },
//         headerTintColor: '#fff',
//       }),
//     },
//     ScrollViewOpacity: {
//       screen: ScrollViewOpacity,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: 'ScrollView Opacity',
//         headerStyle: {
//           backgroundColor: colors.primary,
//           elevation: 0
//         },
//         headerTintColor: '#fff',
//         headerRight: (
//           <TouchableOpacity>
//             <Icon
//               name="code"
//               size={25}
//               color="white"
//               style={{ marginRight: 20 }}
//               onPress={() =>
//                 navigation.navigate('Git', {
//                   url: urlCommon + 'component/Api/Reddit/reddit.js',
//                 })
//               }
//             />
//           </TouchableOpacity>
//         ),
//       }),
//     },
//   },
//   {
//     transitionConfig,
//   },
// );
// const Drawer = createDrawerNavigator(
//   {
//     AppNavigator: { screen: AppNavigator },
//   },
//   {
//     contentComponent: SlideMenu,
//     gestureEnabled: true,
//     drawerWidth: 250,
//   },
// );
// export default Drawer;