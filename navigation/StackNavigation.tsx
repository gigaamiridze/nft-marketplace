import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details } from '../screens';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default StackNavigation;
