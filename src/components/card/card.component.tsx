import { FC } from 'react';

import {
  CardContainer,
  CardImage,
  CardImageContainer,
  CardDetailsContainer,
  CountryName,
  CardDetails,
  CardDetail,
} from './card.styles';

interface ICardProps {
  image: string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
  handleOnClick: () => void;
}

const Card: FC<ICardProps> = ({
  image,
  countryName,
  population,
  region,
  capital,
  handleOnClick,
}) => (
  <CardContainer onClick={handleOnClick}>
    <CardImageContainer>
      <CardImage src={image} alt={countryName} />
    </CardImageContainer>

    <CardDetailsContainer>
      <CountryName>
        {countryName.length > 18
          ? `${countryName.slice(0, 18)}...`
          : countryName}
      </CountryName>
      <CardDetails>
        <CardDetail>
          <span>population:</span> {population}
        </CardDetail>
        <CardDetail>
          <span>region:</span> {region}
        </CardDetail>
        <CardDetail>
          <span>capital:</span>
          {capital}
        </CardDetail>
      </CardDetails>
    </CardDetailsContainer>
  </CardContainer>
);

export default Card;
