import React from 'react';
import {Avatar, Card} from 'react-native-paper';
import * as S from '../styles/styles';
import {pure} from 'recompose';

const RightContent = props => <Avatar.Icon {...props} icon="arrow-right" />;

const PokemonCard = ({pokemon, handlePressCard}) => (
  <S.PokemonCard
    onPress={() => handlePressCard(pokemon)}
    Type="elevated"
    elevation={2}>
    <Card.Title
      titleStyle={{textTransform: 'capitalize'}}
      title={pokemon.name}
      right={RightContent}
    />
  </S.PokemonCard>
);

export default pure(PokemonCard);
