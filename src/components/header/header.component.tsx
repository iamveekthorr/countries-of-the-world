import { FC } from 'react';

import {
  HeaderContainer,
  HeaderCaption,
  SwitcherContainer,
  Moon,
  DarkModeText,
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
      <DarkModeText>dark mode</DarkModeText>
    </SwitcherContainer>
  </HeaderContainer>
);

export default Header;
