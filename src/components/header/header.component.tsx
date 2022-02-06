import { FC } from 'react';

import {
  HeaderContainer,
  HeaderCaption,
  SwitcherContainer,
  Moon,
} from './header.styles';

interface IHeaderProps {
  toggleTheme: () => void;
}
const Header: FC<IHeaderProps> = ({ toggleTheme }) => (
  <HeaderContainer>
    <HeaderCaption>Where in the world ?</HeaderCaption>
    <SwitcherContainer
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'enter') toggleTheme();
      }}
    >
      <Moon />
    </SwitcherContainer>
  </HeaderContainer>
);

export default Header;
