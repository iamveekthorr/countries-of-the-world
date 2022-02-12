import { FC } from 'react';
import { useDarkMode } from '../../hooks/useTheme';

import {
  HeaderContainer,
  HeaderCaption,
  SwitcherContainer,
  Moon,
  Sun,
} from './header.styles';

interface IHeaderProps {
  toggleTheme: () => void;
}

const Header: FC<IHeaderProps> = ({ toggleTheme }) => {
  const { theme } = useDarkMode();
  return (
    <HeaderContainer>
      <HeaderCaption>Where in the world ?</HeaderCaption>
      <SwitcherContainer onClick={toggleTheme} role="button" tabIndex={0}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </SwitcherContainer>
    </HeaderContainer>
  );
};

export default Header;
