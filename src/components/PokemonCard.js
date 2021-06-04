import React from 'react';
import {Avatar, Card} from 'react-native-paper';
import * as S from '../styles/styles';
import {navigate} from '../navigation/rootNavigation';

const RightContent = props => <Avatar.Icon {...props} icon="arrow-right" />;

const propsAreEqual = (prev, next) => {
  return prev.name === next.name;
};

const handlePressCard = pokemon => {
  navigate('Details', pokemon);
};

const PokemonCard = React.memo(
  ({item}) => (
    <S.PokemonCard
      onPress={() => handlePressCard(item)}
      Type="elevated"
      elevation={2}>
      <Card.Title
        titleStyle={{textTransform: 'capitalize'}}
        title={item.name}
        right={RightContent}
      />
    </S.PokemonCard>
  ),
  propsAreEqual,
);

export default PokemonCard;
