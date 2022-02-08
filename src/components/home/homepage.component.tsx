import { FC, useEffect, useState } from 'react';
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

  const options: string[] = ['africa', 'america', 'oceania', 'europe', 'asia'];

  const { countries, isLoading, isError } = useCountries(
    'https://restcountries.com/v3.1/all'
  );

  const [data, setData] = useState<typeof countries>();

  const toggling = (): void => setIsOpen((prev) => !prev);

  const handleChange = async (value: string) => {
    if (value !== 'filter by region') {
      const response = await axios
        .get<typeof countries>(`https://restcountries.com/v3.1/region/${value}`)
        .then((res) => res.data);
      setData(response);
    }
  };

  const onOptionClicked = (value: string) => () => {
    setIsOpen((prev) => !prev);
    handleChange(value);
    setSelectedOption(value);
  };

  useEffect(() => {
    setSelectedOption('filter by region');
    setData(countries);
  }, [countries]);

  return (
    <HomePageBody>
      <SearchInputAndFilterContainer>
        <FormInputContainer>
          <SearchInput type="search" placeholder="search for a country..." />
          <SearchIcon />
        </FormInputContainer>
        <CustomSelectContainer>
          <CustomSelect onClick={toggling}>
            {selectedOption}
            <ChevronDown />
          </CustomSelect>
          {isOpen && (
            <CustomSelectOptions>
              {options.map((option) => (
                <CustomSelectOption
                  key={uuid()}
                  onClick={onOptionClicked(option)}
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
          data?.map((country) => (
            <Card
              key={uuid()}
              countryName={country.name.common}
              capital={country.capital}
              image={country.flags.svg}
              population={country.population}
              region={country.region}
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
