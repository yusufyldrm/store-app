import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Container = styled.div`
  width: 50%;
  padding-top: 30px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 80%;
  }

`;

