import React from 'react';
import {View} from 'react-native';
import usePokemon from '../hooks/usePokemons';
import {Chip, Card} from 'react-native-paper';
import {StateThemeContext} from '../context/ThemeContext';

const Details = props => {
  const pokemonProps = props.route.params;
  const {pokemonData} = usePokemon(pokemonProps.url);
  const {pokemon} = pokemonData;
  const officialArtwork = pokemon?.sprites?.other['official-artwork'];
  const {toggleTheme, isThemeDark} = React.useContext(StateThemeContext);

  const TagChips = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        {pokemon?.types.map(item => {
          return (
            <Chip style={{marginRight: 10}} key={item.slot}>
              {item?.type?.name}
            </Chip>
          );
        })}
      </View>
    );
  };

  console.log('print list: ', pokemonData.pokemonList);
  return (
    <Card>
      <Card.Cover
        style={{width: 400, height: 400}}
        source={{uri: officialArtwork?.front_default}}
      />
      <Card.Title
        title={pokemon?.name}
        subtitle={`pokedex id ${pokemon?.order}`}
      />
      <Card.Content>
        <TagChips />
      </Card.Content>
    </Card>
  );
};

export default Details;
