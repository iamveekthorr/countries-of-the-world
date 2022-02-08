import { FC, ReactNode } from 'react';

import { CountryCardList } from './card-list.styles';

interface ICardListProps {
  children: ReactNode;
}

const CardList: FC<ICardListProps> = ({ children }) => (
  <CountryCardList>{children}</CountryCardList>
);

export default CardList;
