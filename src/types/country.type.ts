type CountryResponse = {
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
  currencies: Record<string, any>;
  languages: Record<string, any>;
  flag: Record<string, any>;
};

export default CountryResponse;
