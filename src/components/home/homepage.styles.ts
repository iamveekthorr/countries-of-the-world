import styled from 'styled-components';

export const HomePageBody = styled.main`
  padding: 5rem 3rem;
  @media only screen and (min-width: 90em) {
    padding: 5rem 10rem;
  }
`;

export const SearchInputAndFilterContainer = styled.div`
  display: block;

  @media only screen and (min-width: 90em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;

  @media only screen and (min-width: 90em) {
    margin-bottom: 0;
    margin-right: auto;
    width: 50rem;
  }
  & > svg {
    position: absolute;
    top: 50%;
    left: 2.5rem;
    transform: translateY(-50%);
    pointer-events: none;
    fill: ${(props) => props.theme.text};
    height: 2rem;
    width: 2rem;
  }
`;

export const SearchInput = styled.input`
  padding: 2rem 1.5rem 2rem 6rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  font-family: inherit;
  font-weight: inherit;
  background-color: ${(props) => props.theme.background};
  outline: none;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  width: inherit;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.text};
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 0;
    width: 0;
  }
`;
