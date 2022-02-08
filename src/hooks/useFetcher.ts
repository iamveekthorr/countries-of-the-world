/* eslint-disable implicit-arrow-linebreak */
import useSWR from 'swr';
import axios from 'axios';

interface CountryResponse {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, any>;
  };
  tld: [];
  capital: string;
  subregion: string;
  region: string;
  population: number;
  borders: string[];
  flags: Record<string, any>;
  currencies: [Record<string, any>];
  languages: [Record<string, any>];
  flag: Record<string, any>;
}

const fetcher = async (url: string): Promise<CountryResponse[]> => {
  const { data } = await axios.get<CountryResponse[]>(url);
  return data as CountryResponse[];
};

export const useCountries = (url: string) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    countries: data,
    isLoading: !error && !data,
    isError: error,
  };
};
