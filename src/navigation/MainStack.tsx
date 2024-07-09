import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenNames} from './screenNames.ts';
import {Info, Location} from '../screens';
import {SeatsStack} from './SeatsStack.tsx';
import {renderTabBarIcon} from './utils.tsx';
import {primary} from '../assets/colors.ts';

const Tab = createBottomTabNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShadowVisible: false,
        headerStyle: styles.headerStyle,
        headerTitleAlign:
          route.name === screenNames.BUS_ROUTES ? 'center' : 'left',
        headerTitleStyle: styles.headerTitleStyle,
        tabBarIcon: renderTabBarIcon(route),
      })}>
      <Tab.Screen
        component={SeatsStack}
        name={screenNames.SEATS_STACK}
        options={{headerShown: false}}
      />
      <Tab.Screen component={Location} name={screenNames.LOCATION} />
      <Tab.Screen component={Info} name={screenNames.INFO} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === 'android' ? 70 : 81,
  },
  headerStyle: {
    backgroundColor: primary,
  },
  headerTitleStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 26,
  },
});
