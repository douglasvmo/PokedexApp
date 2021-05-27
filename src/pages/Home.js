import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Snackbar} from 'react-native-paper';
import usePokemons from '../hooks/usePokemons';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [showMessageError, setShowMessageError] = React.useState(false);
  const {pokemonData, pokemonFunctions} = usePokemons();

  const onDismissSnackBar = () => setShowMessageError(false);

  React.useEffect(() => {
    setShowMessageError(pokemonData.error ? true : false);
  }, [pokemonData.error]);

  return (
    <React.Fragment>
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
      <Snackbar visible={showMessageError} onDismiss={onDismissSnackBar}>
        {pokemonData.error}
      </Snackbar>
    </React.Fragment>
  );
};

export default Home;
