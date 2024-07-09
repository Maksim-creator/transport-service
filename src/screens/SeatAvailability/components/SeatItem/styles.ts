import {StyleSheet} from 'react-native';
import {lightBlue, white} from '../../../../assets/colors.ts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 14,
  },
  item: {
    width: 47,
    height: 47,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 19,
    fontFamily: 'Poppins-Regular',
  },
  unavailableItem: {
    backgroundColor: lightBlue,
  },
});
