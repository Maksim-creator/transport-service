import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack} from './MainStack.tsx';
import {screenNames} from './screenNames.ts';
import {primary} from '../assets/colors.ts';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primary,
    background: primary,
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={screenNames.MAIN_STACK}
          component={MainStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
