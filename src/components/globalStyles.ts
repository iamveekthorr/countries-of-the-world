import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{ 
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.50s linear, color 0.50s linear;
    }
`;
