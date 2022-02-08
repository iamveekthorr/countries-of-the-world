import { FC } from 'react';

import {
  HeaderContainer,
  HeaderCaption,
  SwitcherContainer,
  Moon,
  Sun,
} from './header.styles';

interface IHeaderProps {
  toggleTheme: () => void;
  theme: string;
}
const Header: FC<IHeaderProps> = ({ toggleTheme, theme }) => (
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
      {theme === 'dark' ? <Sun /> : <Moon />}
    </SwitcherContainer>
  </HeaderContainer>
);

export default Header;
