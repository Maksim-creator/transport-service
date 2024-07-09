import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    alignSelf: 'center',
    gap: 26,
    paddingVertical: Platform.OS === 'android' ? 20 : 0,
  },
});
