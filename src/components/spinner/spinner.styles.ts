import styled, { keyframes } from 'styled-components';

const loading = keyframes`
to {
  transform: rotate(1turn);

}`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20rem 0;

  &::after {
    content: '';
    width: 10rem;
    height: 10rem;
    border: 5px solid ${(props) => props.theme.background};
    border-top-color: ${(props) => props.theme.body};
    border-radius: 50%;
    animation: ${loading} 1s ease infinite;
  }
`;

export default Spinner;
