import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  object-position: center;
  aspect-ratio: 1;
  user-select: none;
`;

export const Card = styled(motion.div)`
  position: relative;
  width: inherit;
  height: 100%;
  border: 1px solid #f5f5f5;
  background-color: #fff;
  cursor: pointer;
  margin: 0 10px 10px 0;
  overflow: hidden;
  border-radius: 10px;

  :hover {
    ${Image} {
      opacity: .7;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 85%;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 85%;
  };
`;

export const LinkContainer = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  min-height: 350px;
`;

export const Detail = styled.div`
  padding: 10px;
`;

export const Name = styled.span`
  font-size: 15px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Price = styled.span`
  font-size: 18px;
`;

export const PriceFriction = styled.span`
  font-size: 12px;
  margin-left: 1px;
  &:first-child {
    font-size: 13px;
    margin-left: 0;
    margin-right: 1px;
  }
  top: -5px;
  position: relative;
`;

export const ImgPlaceholder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
