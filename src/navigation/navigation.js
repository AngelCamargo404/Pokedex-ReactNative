import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountNavigation from './AccountNavigation';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex" screenOptions={{ headerShown: false }}>
        <Tab.Screen 
        name="Account" 
        component={AccountNavigation} 
        options = {
          {
            tabBarLabel: "Mi Cuenta",
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
            headerTitle:"Mi Cuenta",
            title: 'Aligned Center',
            headerTitleAlign: 'center'
          }
        }
         />
        <Tab.Screen 
        name="Pokedex" 
        component={PokedexNavigation} 
        options = {
          {
            tabBarLabel: "",
            tabBarIcon: () => renderPokeball()
          }
        }
        />
        <Tab.Screen 
        name = "Favorite" 
        component = {FavoriteNavigation} 
        options = {
          {
            tabBarLabel: "Favoritos",
            tabBarIcon: ({color, size}) => (
              <Icon name="heart" color={color} size={size} />
            ),
            headerTitle:"Favoritos",
            title: 'Aligned Center',
            headerTitleAlign: 'center'
          }
        } />
    </Tab.Navigator>
  );
}

function renderPokeball(params) {
    return (
      <Image 
        source={require('../assets/pokeball.png')}
        style={{ width: 60, height: 60, top: -15}}
      />
    );
}