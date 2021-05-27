import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const PokemonCard = ({pokemon}) => {
  return (
    <Card>
      <Card.Title title={pokemon.name} />
      <Card.Actions>
        <Button>View</Button>
      </Card.Actions>
    </Card>
  );
};

export default PokemonCard;
