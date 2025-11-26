import AsyncStorage from '@react-native-async-storage/async-storage';
import type {StorageManager} from 'native-base';

const COLOR_MODE_KEY = '@nb-color-mode';

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem(COLOR_MODE_KEY);
      return val === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  },
  set: async (value: 'light' | 'dark') => {
    try {
      await AsyncStorage.setItem(COLOR_MODE_KEY, value);
    } catch {
      // ignore
    }
  },
};


