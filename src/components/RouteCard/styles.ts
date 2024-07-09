import {StyleSheet} from 'react-native';
import {black, blue, white} from '../../assets/colors.ts';

export default StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: 'center',
    width: 250,
    height: 346,
    shadowColor: black,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    elevation: 5,
  },
  header: {
    backgroundColor: blue,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 8,
  },
  busNameText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    color: white,
  },
  destinationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: white,
  },
  imageContainer: {
    backgroundColor: white,
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: 255,
    paddingTop: 15,
  },
  image: {
    width: '100%',
    height: 290,
  },
});
