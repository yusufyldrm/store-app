import React from 'react';
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  SelectedText,
  Label,
  Wrapper,
  Error
} from './style.js';
import { BsChevronDown as DownIcon } from 'react-icons/bs';

const selectRef = React.createRef();

const Dropdown = ({
  change,
  options,
  selected,
  defaultValue,
  label,
  error,
  containerStyle
}) => {

  const handleChange = (e) => {
    change({ value: e.target.selectedOptions[0].text });
  };

  return (
    <Wrapper style={containerStyle || {}}>
      {label && <Label>{label}</Label>}
      <DropdownWrapper
        $error={!!error}
      >
        <StyledSelect
          ref={selectRef}
          value={selected.value || defaultValue}
          onChange={handleChange}
        >
          {defaultValue &&
            <StyledOption
              key={'default'}
              value={defaultValue}
              disabled
            >
              {defaultValue}
            </StyledOption>
          }

          {options.map((option, idx) => (
            <StyledOption
              key={`${idx}-${option}`}
              value={option.value}
            >
              {option.value}
            </StyledOption>
          ))}
        </StyledSelect>

        <SelectedText $error={!!error}>{selected?.value || defaultValue}</SelectedText>
        <DownIcon color='#000' size={'16px'} style={{ marginLeft: '15px' }} />
      </DropdownWrapper>
      {error && <Error>*{error}</Error>}
    </Wrapper>
  );
};

export default Dropdown;