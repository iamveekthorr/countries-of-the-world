import styled from 'styled-components';

export const PageContainer = styled.section`
  padding: 5rem 3rem;
  @media only screen and (min-width: 90em) {
    padding: 5rem 10rem;
  }
`;

export const BackButton = styled.button`
  background-color: ${(props) => props.theme.background};
  padding: 1rem 2rem;
  color: ${(props) => props.theme.text};
  text-transform: capitalize;
  border: none;
`;
