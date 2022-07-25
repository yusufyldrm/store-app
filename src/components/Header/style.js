import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  width: 90%;
  position: sticky;
  top: 0;
  margin-bottom: 50px;
  margin: 0 auto;
  margin-top: 50px;
  z-index: 1;
  margin-bottom: 50px;
  max-width: ${({ theme }) => Number(theme.breakpoints.desktopLarge.slice(0, -2)) + 600}px;
  min-width: 200px;
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
`;

export const Logo = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  user-select: none;
`;

export const Navs = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;
