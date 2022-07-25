import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.button)`
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background-color: ${({ bg }) => bg};
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  p{
    color: ${({ $textColor }) => $textColor};
  }

  padding: ${({ pd }) => pd};
  height: 45px;
  transition: all 0.2s ease, color 0.2s ease;
  user-select: none;
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px 0;
  :active {
    transform: ${({ disabled }) => disabled ? 'none' : 'scale(.994)'};
  }

  :disabled {
    cursor: not-allowed;
    opacity: .5;
  }

`;