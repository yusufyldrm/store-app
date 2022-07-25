import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 15px;
  .w-input-icon {
    position: relative;
  }
`;

export const Input = styled.input`
  background-color: #fff;
  margin-top: 5px;
  padding: 12px;
  padding-left: ${({ $hasLeftIcon }) => $hasLeftIcon ? '30px' : '12px'};
  padding-right: ${({ $hasLeftIcon }) => $hasLeftIcon ? '30px' : '12px'};
  width: calc(100% - 25px);
  outline: none;
  border: ${({ $error }) => $error ? '1px solid #ff0033' : '1px solid #EEF0FF'};
  color: ${({ $error }) => $error ? '#ff0033' : '#212121'};
  transition: background-color 0.3s ease;
  border-radius: 5px;
  font-family: inherit;

  min-width: ${({ as }) => as ? 'calc(100% - 25px)' : 'unset'};
  max-width: ${({ as }) => as ? 'calc(100% - 25px)' : 'unset'};
  min-height: ${({ as }) => as ? '3rem' : 'unset'};
  max-height: ${({ as }) => as ? '10rem' : 'unset'};

  :focus {
    border: 1px solid #007CFF;
  }

  ::placeholder {
    user-select: none;
    color: ${({ $error }) => $error ? '#ff003398' : '#21212190'};
  }

  ${({ $responsive, theme }) =>
    $responsive &&
    css`
      @media (max-width: ${theme.breakpoints.tablet}) {
        width: calc(100% - 60px);
      }
      @media (max-width: ${theme.breakpoints.mobile}) {
        width: calc(100% - 5px);
      }
    `}
`;

export const Label = styled.label`
  font-size: 14px;
  user-select: none;
`;

export const ErrorText = styled.span`
  color: #ff0033;
  font-size: 12px;
  float: right;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 15px;
  ${({ theme, $isLeft, $isFocused, $responsive }) =>
    $isLeft ?
      css`
      left: 5px;
      `
      :
      css`
      right: -30px;
      transition: right 0s ease;
      @media (max-width: ${theme.breakpoints.tablet}) {
        right: ${$responsive ? '5px': 'inherit'};
      }
      @media (max-width: ${theme.breakpoints.mobile}) {
        right: ${$responsive ? '-50px': 'inherit'};
      }
      &:after{
        content: '';
        pointer-events: none;
        position: absolute;
        width: 50px;
        height: 100%;
        top: 0;
        right: 20px;
        background-image: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        display: ${$isFocused ? 'none' : 'block'};
      }
    `}
`
