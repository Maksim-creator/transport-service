import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BusRoutes, SeatAvailability} from '../screens';
import {screenNames} from './screenNames.ts';
import {primary} from '../assets/colors.ts';

const Stack = createNativeStackNavigator();

export const SeatsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={props => ({
        headerTitleAlign:
          props.route.name === screenNames.SEATS_AVAILABILITY
            ? 'left'
            : 'center',
        headerShadowVisible: false,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      })}>
      <Stack.Screen name={screenNames.BUS_ROUTES} component={BusRoutes} />
      <Stack.Screen
        name={screenNames.SEATS_AVAILABILITY}
        component={SeatAvailability}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: primary,
  },
  headerTitleStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 26,
  },
});
