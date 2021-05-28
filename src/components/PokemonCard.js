import React from 'react';
import {Avatar, Card} from 'react-native-paper';
import * as S from '../styles/styles';
import * as RootNavigation from '../navigation/rootNavigation';

const RightContent = props => <Avatar.Icon {...props} icon="arrow-right" />;

const PokemonCard = ({pokemon}) => {

  const handlePressCard = () => {
    RootNavigation.navigate('Details', pokemon);
  };

  return (
    <S.PokemonCard
      accessible={true}
      onPress={handlePressCard}
      Type="elevated"
      elevation={2}>
      <Card.Title
        titleStyle={{textTransform: 'capitalize'}}
        title={pokemon.name}
        right={RightContent}
      />
    </S.PokemonCard>
  );
};

export default PokemonCard;
