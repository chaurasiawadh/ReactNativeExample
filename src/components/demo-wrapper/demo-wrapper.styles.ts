import {StyleSheet, Platform} from 'react-native';

export const demoWrapperStyles = StyleSheet.create({
  codeBox: {
    borderColor: '#e5e7eb',
    borderWidth: 1,
  },
  codeText: {
    fontFamily: Platform.select({ios: 'Menlo', android: 'monospace', default: 'monospace'}) ,
    fontSize: 12,
    lineHeight: 18,
  },
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
});


