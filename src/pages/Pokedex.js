import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Snackbar, ActivityIndicator} from 'react-native-paper';
import usePokemons from '../hooks/usePokemons';
import PokemonCard from '../components/PokemonCard';

const Pokedex = ({navigation}) => {
  const [showMessageError, setShowMessageError] = React.useState(false);
  const {pokemonData, pokemonFunctions} = usePokemons();

  const onDismissSnackBar = () => setShowMessageError(false);

  React.useEffect(() => {
    setShowMessageError(pokemonData.error ? true : false);
  }, [pokemonData.error]);

  const renderFooter = () => {
    if (!pokemonData.loading) return null;

    return <ActivityIndicator animating={true} />;
  };

  const handlePressCard = (pokemon) => {
    navigation.navigate('Details', pokemon)
  }

  return (
    <React.Fragment>
      <SafeAreaView>
        <FlatList
          data={pokemonData.pokemonList}
          renderItem={({item}) => {
            return <PokemonCard pokemon={item} handlePressCard={handlePressCard}/>;
          }}
          keyExtractor={(item, index) => item.name + index.toString()}
          onEndReached={pokemonFunctions.requestNextPage}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      </SafeAreaView>
      <Snackbar visible={showMessageError} onDismiss={onDismissSnackBar}>
        {pokemonData.error}
      </Snackbar>
    </React.Fragment>
  );
};

export default Pokedex;
