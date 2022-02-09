import { FC, useState, useRef, useCallback, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import {
  CustomSelectContainer,
  CustomSelect,
  CustomSelectOption,
  CustomSelectOptions,
} from './custom-select.styles';

import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg';

interface ISelectProps {
  options: string[];
  handleChange: (value: string) => void;
}

const Select: FC<ISelectProps> = ({ options, handleChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const closeCustomSelect = useCallback(
    (event: Event): void => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Element) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  const toggling = (): void => setIsOpen((prev) => !prev);

  const onOptionClicked = (value: string): void => {
    setIsOpen((prev) => !prev);
    handleChange(value);
    setSelectedOption(value);
  };

  useEffect(() => {
    document.addEventListener('click', closeCustomSelect);

    return () => {
      document.removeEventListener('click', closeCustomSelect, false);
    };
  }, [closeCustomSelect]);

  return (
    <CustomSelectContainer>
      <CustomSelect ref={ref} onClick={toggling}>
        {selectedOption || 'filter by country'}
        <ChevronDown />
      </CustomSelect>
      {isOpen && (
        <CustomSelectOptions>
          {options.map((option) => (
            <CustomSelectOption
              key={uuid()}
              onClick={() => onOptionClicked(option)}
            >
              {option}
            </CustomSelectOption>
          ))}
        </CustomSelectOptions>
      )}
    </CustomSelectContainer>
  );
};

export default Select;
