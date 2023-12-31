import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IRootStackParams } from '../interfaces';
import { Home, Details } from '../screens';
import { Routes } from '../enums';

const Stack = createStackNavigator<IRootStackParams>();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Details} component={Details} />
    </Stack.Navigator>
  )
}

export default StackNavigation;
