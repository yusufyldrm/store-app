import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProductsContainer = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, calc((90vw - 60px) / 4));
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
  @media (min-width: 1500px) {
    width: 100%;
    grid-template-columns: repeat(4, 350px);
  };
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    grid-template-columns: repeat(3, 250px);
  };
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    grid-template-columns: repeat(2, 300px);
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
  };
`;

export const BottomButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  background-color: #000;
  color: #fff;
  border: none;
  border-top: 1px solid #f5f5f5;
  border-radius: 100%;
  font-size: 70px;
  font-weight: bold;
  user-select: none;
`;

export const ErrorContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -5;
`;
