import styled from 'styled-components';

import { ReactComponent as MoonIcon } from '../../assets/moon.svg';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  justify-content: space-between;
  width: 100%;
  background: ${(props) => props.theme.background};
  @media only screen and (min-width: 90em) {
    padding: 2rem 5rem;
  }
`;

export const HeaderCaption = styled.h1`
  font-size: 2rem;
`;

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none
  color: ${(props) => props.theme.text};
  & > :first-child {
    margin-right: 1rem;
  }
`;

export const Moon = styled(MoonIcon)`
  fill: ${(props) => props.theme.text};
  height: 2rem;
  width: 2rem;
`;

export const DarkModeText = styled.div`
  font-weight: 300;
  text-transform: capitalize;
  font-size: 1.3rem;
`;
