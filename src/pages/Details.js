import React from 'react';
import usePokemon from '../hooks/usePokemons';
import {Card} from 'react-native-paper';
import * as S from '../styles/styles';

const Details = props => {
  const pokemonProps = props.route.params;
  const {pokemonData} = usePokemon(pokemonProps.url);
  const {pokemon} = pokemonData;
  const officialArtwork = pokemon?.sprites?.other['official-artwork'];

  const TagChips = () => {
    return (
      <S.ContainerChip>
        {pokemon?.types.map(item => {
          return (
            <S.PokemonChip key={item.slot}>{item?.type?.name}</S.PokemonChip>
          );
        })}
      </S.ContainerChip>
    );
  };

  return (
    <S.PokemonCard>
      <S.ImageCard source={{uri: officialArtwork?.front_default}} />
      <Card.Title
        title={pokemon?.name}
        titleStyle={{textTransform: 'capitalize'}}
        subtitle={`pokedex id: ${pokemon?.order}`}
      />
      <Card.Content>
        <TagChips />
      </Card.Content>
    </S.PokemonCard>
  );
};

export default Details;
