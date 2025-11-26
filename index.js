/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';

import App from './App';
import {name as appName} from './app.json';

// Suppress React 18 SSRProvider noop warning originating from dependencies
LogBox.ignoreLogs(['SSRProvider is not necessary']);

AppRegistry.registerComponent(appName, () => App);
