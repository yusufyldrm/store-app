import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  background-color: #fff;
  border: 1px solid;
  border-color: ${({ $error }) => $error ? '#ff0033' : '#21212150'};
  border-radius: 5px;
  display: flex;
  align-items: center;
  user-select: none;
  box-sizing: border-box;
  padding: .55rem;
  height: 45px;
  justify-content: space-between;
  margin-top: 5px;
`;

export const StyledSelect = styled.select`
  height: 100%;
  width: 100%;
  opacity: 0;
  position: absolute;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  outline: none;
  &::-ms-expand {
    display: none;
  }
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  cursor: pointer;
`;

export const StyledOption = styled.option`
  color: red !important;
`;

export const SelectedText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blackText};
  color: ${({ $error, theme }) => $error ? '#ff003390' : theme.colors.blackText};
  transition: background-color 0s ease;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  font-size: ${({ size }) => (size === 'lg' ? '17px' : size === 'sm' ? '13.5px' : '15px')};
  letter-spacing: .3px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #000;
  opacity: .7;
  user-select: none;
`;

export const Error = styled.span`
  color: #ff0033;
  float: right;
  font-size: 12px;
`;
