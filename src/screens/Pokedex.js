import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import React, { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      const pokemonsArray = [];
      for await (pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
      setNextUrl(response.next);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </SafeAreaView>
  )
}