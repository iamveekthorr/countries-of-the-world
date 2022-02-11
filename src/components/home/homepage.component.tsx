import { ChangeEvent, FC, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import Card from '../card/card.component';
import CardList from '../card-list/card-list.component';
import Select from '../custom-select-options/custom-select.component';
import Search from '../search-input/search.component';

import Spinner from '../spinner/spinner.styles';

import {
  HomePageBody,
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

  const [apiData, setApiData] = useState<typeof countries>();
  const [query, setQuery] = useState<string>('search for a country...');

  const handleChange = async (value: string): Promise<void> => {
    if (value !== 'filter by region') {
      const { data } = await axios.get<typeof countries>(
        `https://restcountries.com/v3.1/region/${value}`
      );
      console.log('rerender from options');
      return setApiData(data);
    }
    return setApiData(countries);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      const searchResult = countries?.filter(
        (nation) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          nation.name.common.toLowerCase() === e.target.value.toLowerCase()
      );
      console.log('rerender from search');
      setApiData(searchResult);
      return;
    }
    setQuery(query);
    setApiData(countries);
  };

  useEffect(() => {
    if (!countries) return;
    setApiData(countries);
  }, [countries]);

  return (
    <HomePageBody>
      <SearchInputAndFilterContainer>
        <FormInputContainer>
          <Search handleSearchChange={handleSearch} placeholder={query} />
          <SearchIcon />
        </FormInputContainer>
        <Select options={options} handleChange={handleChange} />
      </SearchInputAndFilterContainer>
      <CardList>
        {!isLoading && !isError ? (
          apiData?.map((res) => (
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
