import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  createNavigationContainerRef,
  type NavigationContainerRef,
  type ParamListBase,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorMode, IconButton, Icon, Box, VStack, Text, Pressable, HStack, Divider, Spinner } from 'native-base';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, interpolate } from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { appNavigationStyles } from './app-navigation.styles';
import { ComponentList } from '../components/component-list';
import { ROUTES } from '../constants/routes';
import { COMPONENT_SECTIONS } from '../data/components';
import {
  ButtonDemoScreen,
  BadgeDemoScreen,
  CheckboxDemoScreen,
  InputDemoScreen,
  SelectDemoScreen,
  RadioDemoScreen,
  SwitchDemoScreen,
  SliderDemoScreen,
  TextAreaDemoScreen,
  FormControlDemoScreen,
  AlertDemoScreen,
  AlertDialogDemoScreen,
  ActionSheetDemoScreen,
  ModalDemoScreen,
  TooltipDemoScreen,
  ToastDemoScreen,
  ProgressDemoScreen,
  SpinnerDemoScreen,
  SkeletonDemoScreen,
  AvatarDemoScreen,
  IconDemoScreen,
  IconButtonDemoScreen,
  ImageDemoScreen,
  MenuDemoScreen,
  FabDemoScreen,
  DividerDemoScreen,
  HeadingDemoScreen,
  TextDemoScreen,
  LinkDemoScreen,
  BoxDemoScreen,
  StackDemoScreen,
  CenterDemoScreen,
  ZStackDemoScreen,
  PressableDemoScreen,
  PresenceTransitionDemoScreen,
  AppBarDemoScreen,
  CardDemoScreen,
  TabViewDemoScreen,
  SwipeListDemoScreen,
  FormWithValidationDemoScreen,
  LoginSignupFormsDemoScreen,
  SearchBarDemoScreen,
  AppDrawerDemoScreen,
  FooterDemoScreen,
  TodoListDemoScreen,
} from '../screens/components';
import { HomeScreen } from '../screens/home';
import { IntroScreen } from '../screens/intro';

const Stack = createNativeStackNavigator();
const DRAWER_WIDTH = 280;
const navigationRef: NavigationContainerRef<ParamListBase> = createNavigationContainerRef<ParamListBase>();

type DrawerContextValue = {
  toggleDrawer: () => void;
};
const missingDrawerContext = (): never => {
  throw new Error('DrawerContext not provided');
};
const DrawerContext = React.createContext<DrawerContextValue>({ toggleDrawer: missingDrawerContext });

const ComponentsStack: React.FC = () => {
  const { toggleDrawer } = React.useContext(DrawerContext);
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: '#6423fc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (
          <IconButton
            testID="open-drawer-button"
            onPress={toggleDrawer}
            icon={<Icon as={MaterialIcons} name="menu" size="lg" color="#fff" />}
          />
        ),
      })}
    >
      <Stack.Screen name={ROUTES.HOME} component={IntroScreen} options={{ title: 'Welcome' }} />
      <Stack.Screen name={ROUTES.COMPONENTS} component={HomeScreen} options={{ title: 'Components' }} />
      <Stack.Screen name={ROUTES.BUTTON} component={ButtonDemoScreen} options={{ title: ROUTES.BUTTON }} />
      <Stack.Screen name={ROUTES.BADGE} component={BadgeDemoScreen} options={{ title: ROUTES.BADGE }} />
      <Stack.Screen name={ROUTES.CHECKBOX} component={CheckboxDemoScreen} options={{ title: ROUTES.CHECKBOX }} />
      <Stack.Screen name={ROUTES.INPUT} component={InputDemoScreen} options={{ title: ROUTES.INPUT }} />
      <Stack.Screen name={ROUTES.SELECT} component={SelectDemoScreen} options={{ title: ROUTES.SELECT }} />
      <Stack.Screen name={ROUTES.RADIO} component={RadioDemoScreen} options={{ title: ROUTES.RADIO }} />
      <Stack.Screen name={ROUTES.SWITCH} component={SwitchDemoScreen} options={{ title: ROUTES.SWITCH }} />
      <Stack.Screen name={ROUTES.SLIDER} component={SliderDemoScreen} options={{ title: ROUTES.SLIDER }} />
      <Stack.Screen name={ROUTES.TEXT_AREA} component={TextAreaDemoScreen} options={{ title: 'Text Area' }} />
      <Stack.Screen name={ROUTES.FORM_CONTROL} component={FormControlDemoScreen} options={{ title: 'Form Control' }} />
      <Stack.Screen name={ROUTES.ALERT} component={AlertDemoScreen} options={{ title: ROUTES.ALERT }} />
      <Stack.Screen name={ROUTES.ALERT_DIALOG} component={AlertDialogDemoScreen} options={{ title: 'Alert Dialog' }} />
      <Stack.Screen name={ROUTES.ACTION_SHEET} component={ActionSheetDemoScreen} options={{ title: 'Action Sheet' }} />
      <Stack.Screen name={ROUTES.MODAL} component={ModalDemoScreen} options={{ title: ROUTES.MODAL }} />
      <Stack.Screen name={ROUTES.TOOLTIP} component={TooltipDemoScreen} options={{ title: ROUTES.TOOLTIP }} />
      <Stack.Screen name={ROUTES.TOAST} component={ToastDemoScreen} options={{ title: ROUTES.TOAST }} />
      <Stack.Screen name={ROUTES.PROGRESS} component={ProgressDemoScreen} options={{ title: ROUTES.PROGRESS }} />
      <Stack.Screen name={ROUTES.SPINNER} component={SpinnerDemoScreen} options={{ title: ROUTES.SPINNER }} />
      <Stack.Screen name={ROUTES.SKELETON} component={SkeletonDemoScreen} options={{ title: ROUTES.SKELETON }} />
      <Stack.Screen name={ROUTES.AVATAR} component={AvatarDemoScreen} options={{ title: ROUTES.AVATAR }} />
      <Stack.Screen name={ROUTES.ICON} component={IconDemoScreen} options={{ title: ROUTES.ICON }} />
      <Stack.Screen name={ROUTES.ICON_BUTTON} component={IconButtonDemoScreen} options={{ title: 'Icon Button' }} />
      <Stack.Screen name={ROUTES.IMAGE} component={ImageDemoScreen} options={{ title: ROUTES.IMAGE }} />
      <Stack.Screen name={ROUTES.MENU} component={MenuDemoScreen} options={{ title: ROUTES.MENU }} />
      <Stack.Screen name={ROUTES.FAB} component={FabDemoScreen} options={{ title: ROUTES.FAB }} />
      <Stack.Screen name={ROUTES.DIVIDER} component={DividerDemoScreen} options={{ title: ROUTES.DIVIDER }} />
      <Stack.Screen name={ROUTES.HEADING} component={HeadingDemoScreen} options={{ title: ROUTES.HEADING }} />
      <Stack.Screen name={ROUTES.TEXT} component={TextDemoScreen} options={{ title: ROUTES.TEXT }} />
      <Stack.Screen name={ROUTES.LINK} component={LinkDemoScreen} options={{ title: ROUTES.LINK }} />
      <Stack.Screen name={ROUTES.LAYOUT_BOX} component={BoxDemoScreen} options={{ title: ROUTES.LAYOUT_BOX }} />
      <Stack.Screen name={ROUTES.LAYOUT_STACK} component={StackDemoScreen} options={{ title: 'Stack (VStack/HStack)' }} />
      <Stack.Screen name={ROUTES.LAYOUT_CENTER} component={CenterDemoScreen} options={{ title: ROUTES.LAYOUT_CENTER }} />
      <Stack.Screen name={ROUTES.LAYOUT_ZSTACK} component={ZStackDemoScreen} options={{ title: 'ZStack' }} />
      <Stack.Screen name={ROUTES.PRESSABLE} component={PressableDemoScreen} options={{ title: ROUTES.PRESSABLE }} />
      <Stack.Screen name={ROUTES.TRANSITION} component={PresenceTransitionDemoScreen} options={{ title: 'Presence Transition' }} />
      {/* Designs */}
      <Stack.Screen name={ROUTES.APP_BAR} component={AppBarDemoScreen} options={{ title: 'App Bar' }} />
      <Stack.Screen name={ROUTES.CARD} component={CardDemoScreen} options={{ title: ROUTES.CARD }} />
      <Stack.Screen name={ROUTES.TAB_VIEW} component={TabViewDemoScreen} options={{ title: 'Tab View' }} />
      <Stack.Screen name={ROUTES.SWIPE_LIST} component={SwipeListDemoScreen} options={{ title: 'Swipe List' }} />
      <Stack.Screen name={ROUTES.FORM_WITH_VALIDATION} component={FormWithValidationDemoScreen} options={{ title: 'Form with Validation' }} />
      <Stack.Screen name={ROUTES.LOGIN_SIGNUP_FORMS} component={LoginSignupFormsDemoScreen} options={{ title: 'Login/Signup Forms' }} />
      <Stack.Screen name={ROUTES.SEARCH_BAR} component={SearchBarDemoScreen} options={{ title: 'Search Bar' }} />
      <Stack.Screen name={ROUTES.APP_DRAWER} component={AppDrawerDemoScreen} options={{ title: 'App Drawer' }} />
      <Stack.Screen name={ROUTES.FOOTER} component={FooterDemoScreen} options={{ title: ROUTES.FOOTER }} />
      <Stack.Screen name={ROUTES.TODO_LIST} component={TodoListDemoScreen} options={{ title: 'Todo List' }} />
    </Stack.Navigator>
  );
};

export const AppNavigation: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = React.useState(false);
  const progress = useSharedValue(0);
  const drawerBg = colorMode === 'dark' ? 'gray.900' : 'gray.50';
  const [isTogglingTheme, setIsTogglingTheme] = React.useState(false);

  const toggleDrawer = React.useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  React.useEffect(() => {
    progress.value = withTiming(isOpen ? 1 : 0, { duration: 250 });
  }, [isOpen, progress]);

  const drawerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(progress.value, [0, 1], [-DRAWER_WIDTH, 0]),
        },
      ],
    };
  });

  const overlayAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, [0, 1], [0, 0.4]),
    };
  });

  return (
    <DrawerContext.Provider value={{ toggleDrawer }}>
      <NavigationContainer ref={navigationRef as unknown as React.Ref<NavigationContainerRef<ParamListBase>>} theme={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
        <Box flex={1}>
          <Animated.View
            pointerEvents={isOpen ? 'auto' : 'none'}
            style={[appNavigationStyles.overlay, overlayAnimatedStyle]}
          >
            <Pressable testID="drawer-overlay" onPress={toggleDrawer} style={appNavigationStyles.overlayPressable} />
          </Animated.View>

          <Animated.View
            style={[{ width: DRAWER_WIDTH }, appNavigationStyles.drawerContainer, drawerAnimatedStyle]}
          >
            <Text fontSize="xl" fontWeight="bold" bg="primary.800" color="#fff" px="3" py="3" borderRadius="md">
              React Native UI Kit
            </Text>
            <Box flex={1} bg={drawerBg}>
              <VStack safeArea flex={1} px={4} py={0} space={4}>

                <Pressable
                  onPress={() => {
                    if (navigationRef.isReady()) {
                      navigationRef.navigate(ROUTES.COMPONENTS as never);
                    }
                    toggleDrawer();
                  }}
                >
                  <HStack alignItems="center" justifyContent="space-between" py={3}>
                    <Text fontSize="md">All Components</Text>
                    <Icon as={MaterialIcons} name="chevron-right" />
                  </HStack>
                </Pressable>
                <Divider />
                <ComponentList
                  sections={COMPONENT_SECTIONS}
                  variant="drawer"
                  onItemPress={(route) => {
                    if (navigationRef.isReady()) {
                      navigationRef.navigate(route as never);
                    }
                    toggleDrawer();
                  }}
                />
                <Divider />
                <Pressable
                  onPress={() => {
                    if (isTogglingTheme) {return;}
                    setIsTogglingTheme(true);
                    toggleColorMode();
                    setTimeout(() => {
                      setIsTogglingTheme(false);
                      toggleDrawer();
                    }, 1000);
                  }}
                >
                  <HStack alignItems="center" justifyContent="space-between" py={3}>
                    <Text fontSize="md">Theme</Text>
                    {isTogglingTheme ? (
                      <Spinner size="sm" />
                    ) : (
                      <Icon as={MaterialIcons} name={colorMode === 'dark' ? 'dark-mode' : 'light-mode'} />
                    )}
                  </HStack>
                </Pressable>
              </VStack>
            </Box>
          </Animated.View>

          <Box flex={1} zIndex={1}>
            <ComponentsStack />
          </Box>
        </Box>
      </NavigationContainer>
    </DrawerContext.Provider>
  );
};


