import {StyleSheet} from 'react-native';
import {black, blue, white} from '../../assets/colors.ts';

export default StyleSheet.create({
  mapContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    marginVertical: 18,
  },
  routeInfoContainer: {
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
  speedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  speedIcon: {
    width: 29,
    height: 29,
  },
  speedText: {
    fontFamily: 'Poppins-Regular',
    color: black,
  },
});
