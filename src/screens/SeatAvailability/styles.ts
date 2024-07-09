import {StyleSheet} from 'react-native';
import {black, blue, lightBlue, white} from '../../assets/colors.ts';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    marginVertical: 18,
  },
  routeContainer: {
    backgroundColor: blue,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    width: '60%',
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  busNameText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: white,
  },
  destinationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    color: white,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    gap: 19,
  },
  availabilityHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  availabilityHintText: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: black,
  },
  availabilityHintContainer: {
    gap: 5,
  },
  availableMarker: {
    width: 23,
    height: 23,
    backgroundColor: lightBlue,
    borderRadius: 5,
  },
  freeMarker: {
    width: 23,
    height: 23,
    backgroundColor: white,
    borderRadius: 5,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    width: '80%',
  },
});
