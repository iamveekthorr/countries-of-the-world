import styled from 'styled-components';

import { ReactComponent as MoonIcon } from '../../assets/moon.svg';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${(props) => props.theme.background};
  padding: 2rem 5rem;
  @media only screen and (min-width: 90em) {
    padding: 2rem 10rem;
  }
`;

export const HeaderCaption = styled.h1`
  font-size: 2rem;
`;

export const SwitcherContainer = styled.div`
  background: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  padding: 1rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
`;

export const Moon = styled(MoonIcon)`
  fill: ${(props) => props.theme.text};
  height: 2rem;
  width: 2rem;
`;
