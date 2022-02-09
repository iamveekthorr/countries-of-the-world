import styled from 'styled-components';

export const CardContainer = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  height: inherit;
`;

export const CardImageContainer = styled.div`
  height: 20rem;
  width: 100%;
`;

export const CardDetailsContainer = styled.div`
  padding: 5rem 3rem;
`;

export const CountryName = styled.p`
  font-weight: 800;
  font-size: 1.8rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
`;

export const CardDetails = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CardDetail = styled.div`
  display: flex;
  font-size: 1.5rem;

  & > span {
    text-transform: capitalize;
    margin-right: 1rem;
    font-weight: 600;
  }
`;
