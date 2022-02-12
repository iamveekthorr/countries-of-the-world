import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import CountryResponse from '../../types/country.type';

import { useCountries } from '../../hooks/useFetcher';

import Spinner from '../../components/spinner/spinner.styles';

import { PageContainer, BackButton } from './country.styles';

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
    <PageContainer>
      <BackButton onClick={() => history('/', { replace: true })} type="button">
        &#8592; back
      </BackButton>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          country?.map((cntry) => (
            <div key={uuid()}>
              <div>
                <img src={cntry.flags.svg} alt={cntry.name.common} />
              </div>
              <div>
                <p>{cntry.name.common}</p>

                <div>
                  <div>
                    {/* <p>
                      native name:{' '}
                      {Object.values(cntry.name.nativeName).map((val) => val)}
                    </p> */}
                    <p>population: {cntry.population}</p>
                    <p>region: {cntry.region}</p>
                    <p>sub region: {cntry.subregion}</p>
                    <p>capital: {cntry.capital}</p>
                  </div>
                  {/* <div>
                    <p>top level domain: {cntry.tld}</p>
                    <div>
                      currencies:
                      {Object.values(cntry.currencies).map((cur) => (
                        <p key={uuid()}>{Object.values}</p>
                      ))}
                    </div>
                    <div>
                      language:
                      {Object.values(cntry.languages).map((lang) => (
                        <p key={uuid()}>{lang}</p>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </PageContainer>
  );
};

export default CountryPage;
