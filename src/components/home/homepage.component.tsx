import { FC, useEffect, useState } from 'react';

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

const HomePage: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const [isOpen, setIsOpen] = useState(false);

  const toggling = (): void => setIsOpen((prev) => !prev);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen((prev) => !prev);
  };

  const options: string[] = ['africa', 'america', 'oceania', 'europe', 'asia'];

  useEffect(() => {
    setSelectedOption('filter by region');
  }, []);

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
              {options.map((option, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <CustomSelectOption onClick={onOptionClicked(option)} key={i}>
                  {option}
                </CustomSelectOption>
              ))}
            </CustomSelectOptions>
          )}
        </CustomSelectContainer>
      </SearchInputAndFilterContainer>
    </HomePageBody>
  );
};

export default HomePage;
