import { FC } from 'react';

import {
  CardContainer,
  CardImage,
  CardImageContainer,
  CardDetailsContainer,
  CountryName,
} from './card.styles';

interface ICardProps {
  image: string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
}

const Card: FC<ICardProps> = ({
  image,
  countryName,
  population,
  region,
  capital,
}) => (
  <CardContainer>
    <CardImageContainer>
      <CardImage src={image} alt={countryName} />
    </CardImageContainer>

    <CardDetailsContainer>
      <CountryName>
        {countryName.length > 18
          ? `${countryName.slice(0, 18)}...`
          : countryName}
      </CountryName>
      <div>population: {population}</div>
      <div>region: {region}</div>
      <div>capital: {capital}</div>
    </CardDetailsContainer>
  </CardContainer>
);

export default Card;
