import React from 'react';
import Favorite from '../screens/Favorite';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favorite' component={Favorite} options={{title: "Favoritos"}} />
        <Stack.Screen name='Pokemon' component={PokemonScreen} options={{title: "", headerTransparent: true}} />
    </Stack.Navigator>
  )
}