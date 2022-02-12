import { ChangeEvent, FC, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/card/card.component';
import CardList from '../../components/card-list/card-list.component';
import Select from '../../components/custom-select-options/custom-select.component';
import Search from '../../components/search-input/search.component';

import Spinner from '../../components/spinner/spinner.styles';

import {
  HomePageBody,
  SearchInputAndFilterContainer,
  FormInputContainer,
} from './homepage.styles';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import CountryResponse from '../../types/country.type';

interface IHomepageProps {
  countries: CountryResponse[] | undefined;
  isLoading: boolean;
  isError: any;
}

const HomePage: FC<IHomepageProps> = ({ countries, isLoading, isError }) => {
  const options: string[] = [
    'filter by region',
    'africa',
    'americas',
    'oceania',
    'europe',
    'asia',
  ];

  const [apiData, setApiData] = useState<CountryResponse[]>();
  const [query, setQuery] = useState<string>('search for a country...');
  const [loading, setLoading] = useState<boolean>(isLoading);

  const navigate = useNavigate();

  const handleChange = (value: string): void => {
    if (value !== 'filter by region') {
      const data = countries?.filter(
        (d) => d.region.toLowerCase() === value.toLowerCase()
      );
      return setApiData(data);
    }
    return setApiData(countries);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      const searchResult = countries?.filter(
        (nation) =>
          nation.name.common.toLowerCase() === e.target.value.toLowerCase()
      );
      setApiData(searchResult);
      setQuery(query);
      return;
    }
    setQuery(query);
    setApiData(countries);
  };

  useEffect(() => {
    if (!isLoading) {
      setApiData(countries);
      setLoading(isLoading);
    }
  }, [countries, isLoading, loading]);

  if (isError) return <div>something went wrong {isError?.message}</div>;
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
        {!loading ? (
          apiData?.map((res) => (
            <Card
              key={uuid()}
              countryName={res.name.common}
              capital={res.capital}
              image={res.flags.svg}
              population={res.population}
              region={res.region}
              handleOnClick={() => navigate(`/country/${res.name.common}`)}
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
