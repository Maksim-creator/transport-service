import {Image, ImageSourcePropType} from 'react-native';
import {screenNames} from './screenNames.ts';
import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';

export const renderTabBarIcon = (route: RouteProp<ParamListBase>) => () => {
  let icon: ImageSourcePropType | undefined;

  if (route.name === screenNames.SEATS_STACK) {
    icon = require('../assets/icons/Bus.png');
  } else if (route.name === screenNames.LOCATION) {
    icon = require('../assets/icons/Map.png');
  } else if (route.name === screenNames.INFO) {
    icon = require('../assets/icons/Info.png');
  }

  return <Image source={icon} style={{width: 25, height: 25}} />;
};
