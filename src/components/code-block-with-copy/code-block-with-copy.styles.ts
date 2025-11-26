import {Platform, StyleSheet} from 'react-native';

export const codeBlockStyles = StyleSheet.create({
  codeText: {
    fontFamily: Platform.select({ios: 'Menlo', android: 'monospace', default: 'monospace'}) ,
    fontSize: 12,
    lineHeight: 18,
  },
  container: {
    borderRadius: 12,
  },
});


