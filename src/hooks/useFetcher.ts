import useSWR from 'swr';
import axios from 'axios';

import type CountryResponse from '../types/country.type';

const fetcher = async (url: string): Promise<CountryResponse[]> => {
  const { data } = await axios.get<CountryResponse[]>(url);
  return data as CountryResponse[];
};

export const useCountries = (url: string) => {
  const { data, error, mutate } = useSWR(url, fetcher);

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
