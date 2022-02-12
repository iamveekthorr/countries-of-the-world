import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.styles';
import { useCountries } from '../../hooks/useFetcher';
import CountryResponse from '../../types/country.type';

const CountryPage: FC = () => {
  const { name } = useParams();

  const [country, setCountry] = useState<CountryResponse[]>();
  const { countries, isLoading, isError } = useCountries(
    `https://restcountries.com/v3.1/name/${name}`
  );

  const [loading, setLoading] = useState<boolean>(isLoading);
  const history = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      setCountry(countries);
      setLoading(isLoading);
    }
  }, [countries, name, isLoading]);

  if (isError) return <div>something went wrong</div>;
  return (
    <>
      <button onClick={() => history('/', { replace: true })} type="button">
        back
      </button>
      <div>{loading ? <Spinner /> : country?.map((c) => c.name.common)}</div>
    </>
  );
};

export default CountryPage;
