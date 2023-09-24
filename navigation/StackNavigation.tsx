import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details } from '../screens';
import { Routes } from '../constants';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Details} component={Details} />
    </Stack.Navigator>
  )
}

export default StackNavigation;
