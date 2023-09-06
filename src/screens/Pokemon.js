import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getPokemonDetailsApi } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from '../components/Pokemon/Favorite';
import useAuth from '../hooks/useAuth';

export default function Pokemon({navigation, route: {params: {id}} }) {
  
  const [pokemon, setPokemon] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
      navigation.setOptions({
        headerRight: () => auth && <Favorite id={pokemon?.id} />,
        headerLeft: () => <Icon name='arrow-left' color="#FFFFFF" size={20} style={{ marginLeft:10 }} onPress={navigation.goBack} /> 
      });
  }, [navigation, id, pokemon])
  

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  
  }, [id])

  if(!pokemon) return null;

  return (
    <ScrollView>
      <Header name={pokemon.name} order={pokemon.order} image={pokemon.sprites.other['official-artwork'].front_default} type={pokemon.types[0].type.name} />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}