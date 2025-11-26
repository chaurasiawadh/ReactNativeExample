import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { appStyles } from './app.styles';
import { AppNavigation } from './src/navigation';
import { colorModeStorageManager, theme } from './src/theme';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={appStyles.root}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme} colorModeManager={colorModeStorageManager}>
          <StatusBar backgroundColor={theme.colors.primary[800]} barStyle="light-content" />
          <AppNavigation />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
