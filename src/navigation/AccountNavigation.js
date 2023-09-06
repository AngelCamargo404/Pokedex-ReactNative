import React from 'react';
import Account from '../screens/Account';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Account' component={Account} options={{title: "Mi Cuenta"}} />
    </Stack.Navigator>
  )
}