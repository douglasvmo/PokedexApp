import React from 'react';
import axios from 'axios';
import {enviroment} from '../commons/Constants';
import {useState} from 'react';

const request = axios.create({
  timeout: 1000,
});

const usePokemons = url => {
  const [pokemonList, setPokemonList] = React.useState([]);
  const [pokemon, setPokemon] = React.useState();
  const [nextPage, setNextPage] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = useState();

  React.useEffect(() => {
    handleRequestType();
    console.log('useEffect was executed');
  }, [requestPokemonList]);

  const handleRequestType = React.useCallback(() => {
    if (url) {
      requestPokemonDetails();
    } else {
      requestPokemonList();
    }
  }, [url, requestPokemonDetails, requestPokemonList]);

  const requestPokemonList = React.useCallback(() => {
    setLoading(true);
    request
      .get(enviroment.URL.pokemon)
      .then(({data}) => {
        setLoading(false);
        setNextPage(data.next);
        setPokemonList(prev => [...prev, ...data.results]);
      })
      .catch(handleError);
  }, [request, enviroment]);

  const requestNextPage = () => {
    setLoading(true);
    request
      .get(nextPage)
      .then(({data}) => {
        setLoading(false);
        setNextPage(data.next);
        setPokemonList(prev => [...prev, ...data.results]);
      })
      .catch(handleError);
  };

  const requestPokemonDetails = React.useCallback(() => {
    setLoading(true);
    request
      .get(url)
      .then(({data}) => {
        setLoading(false);
        setPokemon(data);
      })
      .catch(handleError);
  }, [request, enviroment]);

  const handleError = error => {
    setLoading(false);
    setError(error.toString());
  };

  return {
    pokemonData: {
      pokemonList,
      pokemon,
      loading,
      error,
    },
    pokemonFunctions: {
      requestNextPage,
      requestPokemonDetails,
    },
  };
};

export default usePokemons;
