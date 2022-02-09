import { FC, useCallback, useEffect, useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import Card from '../card/card.component';
import CardList from '../card-list/card-list.component';

import Spinner from '../spinner/spinner.styles';

import {
  HomePageBody,
  SearchInput,
  SearchInputAndFilterContainer,
  FormInputContainer,
  CustomSelectContainer,
  CustomSelect,
  CustomSelectOptions,
  CustomSelectOption,
} from './homepage.styles';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg';

import { useCountries } from '../../hooks/useFetcher';

const HomePage: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const [isOpen, setIsOpen] = useState(false);

  const options: string[] = [
    'filter by region',
    'africa',
    'america',
    'oceania',
    'europe',
    'asia',
  ];

  const { countries, isLoading, isError } = useCountries(
    'https://restcountries.com/v3.1/all'
  );

  const [country, setCountry] = useState<typeof countries>();

  const toggling = (): void => setIsOpen((prev) => !prev);

  const ref = useRef<HTMLDivElement>(null);

  const closeCustomSelect = useCallback(
    (event: Event): void => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Element) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  const handleChange = async (value: string) => {
    if (value !== 'filter by region') {
      const { data } = await axios.get<typeof countries>(
        `https://restcountries.com/v3.1/region/${value}`
      );
      setCountry(data);
    }
  };

  const onOptionClicked = (value: string): void => {
    setIsOpen((prev) => !prev);
    handleChange(value);
    setSelectedOption(value);
  };

  useEffect(() => {
    document.addEventListener('click', closeCustomSelect);
    setSelectedOption('filter by region');
    setCountry(countries);

    return () => {
      document.removeEventListener('click', closeCustomSelect, false);
    };
  }, [countries, closeCustomSelect, selectedOption]);

  return (
    <HomePageBody>
      <SearchInputAndFilterContainer>
        <FormInputContainer>
          <SearchInput type="search" placeholder="search for a country..." />
          <SearchIcon />
        </FormInputContainer>
        <CustomSelectContainer>
          <CustomSelect ref={ref} onClick={toggling}>
            {selectedOption}
            <ChevronDown />
          </CustomSelect>
          {isOpen && (
            <CustomSelectOptions>
              {options.map((option) => (
                <CustomSelectOption
                  key={uuid()}
                  onClick={() => onOptionClicked(option)}
                >
                  {option}
                </CustomSelectOption>
              ))}
            </CustomSelectOptions>
          )}
        </CustomSelectContainer>
      </SearchInputAndFilterContainer>
      <CardList>
        {!isLoading && !isError ? (
          country?.map((res) => (
            <Card
              key={uuid()}
              countryName={res.name.common}
              capital={res.capital}
              image={res.flags.svg}
              population={res.population}
              region={res.region}
            />
          ))
        ) : (
          <Spinner />
        )}
      </CardList>
    </HomePageBody>
  );
};

export default HomePage;
