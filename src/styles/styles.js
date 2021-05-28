import styled from "styled-components";
import { Card, Chip } from 'react-native-paper'
import { View, Text } from "react-native";

export const PokemonCard = styled(Card)`
    margin: 10px 20px 10px 20px;
    padding: 0 20px 0 20px; 
`;

export const ImageCard = styled(Card.Cover)`
    width: 100%; 
    height: 300px;
`;

export const ContainerChip = styled(View)`
    flex-Direction: row;
    align-Items: center;
    justify-Content: flex-start;
`;

export const PokemonChip = styled(Chip)`
    margin-right: 10px;
`;

export const ContainerSwitchTheme = styled(View)`
    flex-Direction: row;
    justify-Content: center;
    align-Items: center;
    margin: 0 20px 0 0;
`;

export const TitleSwitchTheme = styled(Text)`
    margin-right: 10px;
    font-size: 15px;
`;
