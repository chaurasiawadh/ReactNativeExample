import {extendTheme, type StorageManager} from 'native-base';

import {colorModeManager} from './color-mode-manager';
import {colors} from './colors';
import {spacing} from './spacing';
import {typography} from './typography';

export const theme = extendTheme({
  colors,
  fontConfig: typography.fontConfig,
  fonts: typography.fonts,
  space: spacing.space,
  radii: spacing.radii,
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'body',
      },
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

export const colorModeStorageManager: StorageManager = colorModeManager;


