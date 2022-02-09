import { FC, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import Card from '../card/card.component';
import CardList from '../card-list/card-list.component';
import Select from '../custom-select-options/custom-select.component';

import Spinner from '../spinner/spinner.styles';

import {
  HomePageBody,
  SearchInput,
  SearchInputAndFilterContainer,
  FormInputContainer,
} from './homepage.styles';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import { useCountries } from '../../hooks/useFetcher';

const HomePage: FC = () => {
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

  const handleChange = async (value: string) => {
    if (value !== 'filter by region') {
      const { data } = await axios.get<typeof countries>(
        `https://restcountries.com/v3.1/region/${value}`
      );
      return setCountry(data);
    }
    return setCountry(countries);
  };

  useEffect(() => {
    setCountry(countries);
  }, [countries]);

  return (
    <HomePageBody>
      <SearchInputAndFilterContainer>
        <FormInputContainer>
          <SearchInput type="search" placeholder="search for a country..." />
          <SearchIcon />
        </FormInputContainer>
        <Select options={options} handleChange={handleChange} />
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
