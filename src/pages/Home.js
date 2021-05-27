import React from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import usePokemons from '../hooks/usePokemons';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const {pokemonData, pokemonFunctions} = usePokemons();

  return (
    <SafeAreaView>
      <FlatList
        data={pokemonData.pokemonList}
        renderItem={({item}) => {
          return <PokemonCard pokemon={item} />;
        }}
        keyExtractor={(item, index) => item.name + index.toString()}
        onEndReached={pokemonFunctions.requestNextPage}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

export default Home;
