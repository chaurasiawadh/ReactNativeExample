import {StyleSheet} from 'react-native';

export const appNavigationStyles = StyleSheet.create({
  drawerContainer: {
    bottom: 0,
    elevation: 6,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    top: 0,
    zIndex: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  overlayPressable: {
    flex: 1,
  },
});


