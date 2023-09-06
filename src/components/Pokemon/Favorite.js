import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addPokemonFavorite, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite';

export default function Favorite({id}) {
    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false);
    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    useEffect(() => {
        (async () => {
          try {
            const response = await isPokemonFavoriteApi(id);
            setIsFavorite(response);
          } catch (error) {
            setIsFavorite(false);
          }
        })();
    }, [id, reloadCheck]);

    const onReloadCheckFavorite = () => {
      setReloadCheck(!reloadCheck);
    }

    const addFavorite = async () => {
      try {
        await addPokemonFavorite(id);
        onReloadCheckFavorite();
      } catch (error) {
        console.log(error);
      }
    };

    const removeFavorite = async () => {
      try {
        await removePokemonFavoriteApi(id);
        onReloadCheckFavorite();
      } catch (error) {
        console.log(error);
      }
    }

  return <Icon name="heart" color="#FFFFFF" size={20} onPress={isFavorite ? removeFavorite : addFavorite} style={{marginRight:20}} />
  
}