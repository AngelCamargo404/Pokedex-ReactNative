import React from 'react';
import Pokedex from '../screens/Pokedex';
import { createStackNavigator } from '@react-navigation/stack';
import Pokemon from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Pokedex' component={Pokedex} options={{title: "", headerTransparent: true}} />
        <Stack.Screen name='Pokemon' component={Pokemon} options={{title: "", headerTransparent: true}} />
    </Stack.Navigator>
  )
}