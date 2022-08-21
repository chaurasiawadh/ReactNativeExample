import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '../assets/color';
import {Home} from '../screen/homeView';
import {Texts} from '../screen/text';
import {ScrollViews} from '../screen/scrollView';
import {Images} from '../screen/image';
import {FlatLists} from '../screen/flatListView';
import {Swipe} from '../screen/swipeView/swipeView';
import {Pickers} from '../screen/picker';
import StatusBars from '../screen/statusBar';
import {Progress} from '../screen/progressView';
import {SectionLists} from '../screen/sectionLists';
import {Switches} from '../screen/switchView';
import {Shares} from '../screen/shares';
import {Animations} from '../screen/animation';
import Multiple from '../screen/animationView/multipleView';
import {Fade} from '../screen/animationView/fadeView';
import {Shadow} from '../screen/animationView/shadowView';
import {Loader} from '../screen/animationView/loaderView';
import {ApiHome} from '../screen/apiView/apiHomePage';
import {VectorIcon} from '../screen/vectorIcons';
import RedditApi from '../screen/apiView/redditView/redditView';
import ScrollViewOpacity from '../screen/designPage/scrollOpacityView';

import {SlideMenu} from './../slideMenu';
import Gits from './../screen/git';
import {Web} from '../screen/website';

import {
  BasicBar,
  BasicColumn,
  Column,
  ColumnRange,
  ColumnWithDrillDown,
  CompareMultipleSeries,
  DonutChart,
  FlagsMarkingEvents,
  GradientFill,
  HollowCandleStick,
  HtmlTable,
  MonochromeFill,
  NegativeColumn,
  NegativeStack,
  PieChart,
  PieWithLegend,
  PointMarkers,
  SemiCircleDonut,
  SingleLineSeries,
  Spline,
  Stacked,
  StackedBar,
  StackedColumn,
  StepLine,
  StockArea,
  StockAreaRange,
  StockGUI,
  VariableRadiusPie,
} from '../charts';

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
      headerLeft: () => (
        <TouchableOpacity
          style={{padding: 16}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <FeatherIcon name="menu" size={25} color="white" />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          style={{padding: 20, paddingRight: 16}}
          onPress={() =>
            navigation.navigate('Git', {
              url: urlCommon + `${path}`, title: `${headerTitle} code`
            })
          }>
          <Icon name="code" size={25} color="white" />
        </TouchableOpacity>
      ),
    }),
  };
};

const AppNavigator = createStackNavigator({
  Home: {screen: Home, ...hideHeader},
  Git: {screen: Gits},
  Texts: {screen: Texts, ...code('Text', 'screen/text.js')},
  ScrollViews: {
    screen: ScrollViews,
    ...code('ScrollView', 'screen/scrollView.js'),
  },
  Images: {screen: Images, ...code('Image', 'screen/image.js')},
  FlatLists: {screen: FlatLists, ...code('FlatList', 'screen/flatListView.js')},
  Swipe: {screen: Swipe, ...code('Swipe', 'screen/swipeView/swipeView.js')},
  Pickers: {screen: Pickers, ...code('Picker', 'screen/picker.js')},
  StatusBars: {screen: StatusBars, ...code('StatusBar', 'screen/statusBar.js')},
  Progress: {
    screen: Progress,
    ...code('Progress Bar', 'screen/progressView.js'),
  },
  SectionLists: {
    screen: SectionLists,
    ...code('SectionList', 'screen/sectionLists.js'),
  },
  Switch: {screen: Switches, ...code('Switch', 'screen/switchView.js')},
  Web: {screen: Web, ...code('WebView', 'screen/website.js')},
  Shares: {screen: Shares, ...code('Share', 'screen/shares.js')},
  Animations: {screen: Animations, ...code('Animation', 'screen/animation.js')},
  Multiple: {
    screen: Multiple,
    ...code('Multiple Animation', 'screen/animationView/multipleView.js'),
  },
  Fade: {
    screen: Fade,
    ...code('Fade Animation', 'screen/animationView/fadeView.js'),
  },
  Shadow: {
    screen: Shadow,
    ...code('Shadow', 'screen/animationView/shadowView.js'),
  },
  Loader: {
    screen: Loader,
    ...code('Loader Animation', 'screen/animation/loaderView.js'),
  },
  ApiHome: {screen: ApiHome, ...code('Api', 'screen/apiView/apiHomePage.js')},
  VectorIcon: {
    screen: VectorIcon,
    ...code('Vector Icons', 'screen/vectorIcons.js'),
  },
  RedditApi: {
    screen: RedditApi,
    ...code('Reddit Popular Api', 'screen/apiView/redditView/redditView.js'),
  },
  ScrollViewOpacity: {
    screen: ScrollViewOpacity,
    ...code('ScrollView Opacity', 'screen/designPage/scrollOpacityView.js'),
  },

  //  -----------------------CHART START--------------------------------

  StockGUI: {screen: StockGUI, ...code('Stock GUI', 'charts/stocks/gui.js')},
  SingleLineSeries: {
    screen: SingleLineSeries,
    ...code('SingleLineSeries', 'charts/stocks/singleLineSeries.js'),
  },
  HollowCandleStick: {
    screen: HollowCandleStick,
    ...code('HollowCandleStick', 'charts/stocks/candleStick.js'),
  },
  CompareMultipleSeries: {
    screen: CompareMultipleSeries,
    ...code('CompareMultipleSeries', 'charts/stocks/compareMultipleSeries.js'),
  },
  Spline: {screen: Spline, ...code('Spline', 'charts/stocks/Spline.js')},
  StepLine: {
    screen: StepLine,
    ...code('StepLine', 'charts/stocks/stepLine.js'),
  },
  StockArea: {
    screen: StockArea,
    ...code('StockArea', 'charts/stocks/stockArea.js'),
  },
  StockAreaRange: {
    screen: StockAreaRange,
    ...code('StockAreaRange', 'charts/stocks/stockAreaRange.js'),
  },
  Column: {screen: Column, ...code('Column', 'charts/stocks/column.js')},

  PointMarkers: {
    screen: PointMarkers,
    ...code('PointMarkers', 'charts/stocks/pointMarkers.js'),
  },
  FlagsMarkingEvents: {
    screen: FlagsMarkingEvents,
    ...code('FlagsMarkingEvents', 'charts/stocks/flagsMarkingEvents.js'),
  },
  PieChart: {
    screen: PieChart,
    ...code('PieChart', 'charts/pieChart/pieChart.js'),
  },
  DonutChart: {
    screen: DonutChart,
    ...code('DonutChart', 'charts/pieChart/donutChart.js'),
  },
  GradientFill: {
    screen: GradientFill,
    ...code('GradientFill', 'charts/pieChart/pieWithGradientFill.js'),
  },
  PieWithLegend: {
    screen: PieWithLegend,
    ...code('PieWithLegend', 'charts/pieChart/pieWithLegend.js'),
  },
  MonochromeFill: {
    screen: MonochromeFill,
    ...code('MonochromeFill', 'charts/pieChart/pieWithLegend.js'),
  },
  SemiCircleDonut: {
    screen: SemiCircleDonut,
    ...code('SemiCircleDonut', 'charts/stocks/semiCircleDonut.js'),
  },
  VariableRadiusPie: {
    screen: VariableRadiusPie,
    ...code('VariableRadiusPie', 'charts/stocks/variableRadiusPie.js'),
  },
  BasicBar: {screen: BasicBar, ...code('BasicBar', 'charts/bar/basicBar.js')},
  BasicColumn: {
    screen: BasicColumn,
    ...code('BasicColumn', 'charts/bar/basicColumn.js'),
  },
  NegativeStack: {
    screen: NegativeStack,
    ...code('NegativeStack', 'charts/bar/negativeStack.js'),
  },
  ColumnRange: {
    screen: ColumnRange,
    ...code('ColumnRange', 'charts/bar/columnRange.js'),
  },
  ColumnWithDrillDown: {
    screen: ColumnWithDrillDown,
    ...code('ColumnWithDrillDown', 'charts/bar/drillDownColumn.js'),
  },
  NegativeColumn: {
    screen: NegativeColumn,
    ...code('NegativeColumn', 'charts/bar/negativeColumn.js'),
  },
  HtmlTable: {
    screen: HtmlTable,
    ...code('HtmlTable', 'charts/bar/htmlTable.js'),
  },
  Stacked: {screen: Stacked, ...code('Stacked', 'charts/stocks/stacked.js')},
  StackedBar: {
    screen: StackedBar,
    ...code('StackedBar', 'charts/stocks/stackedBar.js'),
  },
  StackedColumn: {
    screen: StackedColumn,
    ...code('StackedColumn', 'charts/stocks/stackedColumn.js'),
  },

  //  -----------------------CHART END--------------------------------
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
