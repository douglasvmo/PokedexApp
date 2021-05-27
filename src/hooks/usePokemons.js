import React from 'react';
import axios from 'axios';
import {enviroment} from '../commons/Constants';

const request = axios.create({
  timeout: 1000,
});

const usePokemons = () => {
  const [pokemonList, setPokemonList] = React.useState([]);
  const [nextPage, setNextPage] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const requestPokemonList = React.useCallback(() => {
    setLoading(true);
    request
      .get(enviroment.URL.pokemon)
      .then(({data}) => {
        setLoading(false);
        setNextPage(data.next);
        setPokemonList(prev => [...prev, ...data.results]);
      })
      .catch(error => {
        setLoading(false);
        console.log('print error: ', error);
      });
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
      .catch(error => {
        setLoading(false);
        console.log('print error: ', error)
      });
  };

  React.useEffect(() => {
    requestPokemonList();
  }, [requestPokemonList]);

  return {
    pokemonData: {
      pokemonList,
      loading
    },
    pokemonFunctions: {
      requestNextPage,
    },
  };
};

export default usePokemons;
