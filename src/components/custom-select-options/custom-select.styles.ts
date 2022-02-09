import styled from 'styled-components';

export const CustomSelectContainer = styled.div`
  position: relative;
  width: 30rem;
  font-size: 1.3rem;
`;

export const CustomSelect = styled.div`
  text-align: left;
  appearance: none;
  -webkit-appearance: none;
  padding: 2rem 3rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  font-family: inherit;
  font-weight: inherit;
  background-color: ${(props) => props.theme.background};
  outline: none;
  border: none;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  font-size: inherit;

  & > svg {
    position: absolute;
    right: 3rem;
    fill: ${(props) => props.theme.text};
    top: 50%;
    transform: translateY(-50%);
    height: 2rem;
    width: 2rem;
  }
`;

export const CustomSelectOptions = styled.ul`
  cursor: pointer;
  top: 7rem;
  width: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.background};
`;

export const CustomSelectOption = styled.li`
  font-size: inherit;
  padding: 2rem 3rem;
  width: 100%;
  text-transform: capitalize;
  list-style: none;
`;
