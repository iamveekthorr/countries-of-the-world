import styled from 'styled-components';
import { FC, ChangeEvent } from 'react';

const SearchInput = styled.input`
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

interface ISearchInputProps {
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Search: FC<ISearchInputProps> = ({ handleSearchChange, placeholder }) => (
  <SearchInput
    type="search"
    placeholder={placeholder}
    onChange={handleSearchChange}
  />
);

export default Search;
