import styled from 'styled-components';

export const CountryCardList = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;

  grid-template-columns: repeat(auto-fit, min(30rem, 100%));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
