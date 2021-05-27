import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

const Home = () => {
  return (
    <View>
      <Text>Pokedex App</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
};

export default Home;
