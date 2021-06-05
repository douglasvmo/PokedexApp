import React from 'react';
import {render} from '@testing-library/react-native';

import PokemonCard from './PokemonCard';

it('should be render correctly', async()=>{
    const item = {name: "buba", }
    render(<PokemonCard item={item}/>)
})