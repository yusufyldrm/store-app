import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktopLarge};
  margin: 0 auto;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 35vw;
  max-width: 400px;
  min-height: 200px;
  cursor: zoom-in;
  border-right: 1px solid #f5f5f5;
  margin-right: 20px;
  border-bottom: 1px solid #f5f5f5;
  min-height: 30vw;
  
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      img {
        position: fixed;
        height: 80%;
        object-fit: contain;
        max-width: 70vw;
        z-index: 2;
        margin: 0 auto;
        top: 0;
        left: 0;
        right: 0;
        cursor: zoom-out;
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          max-width: 100vw;
        }
    }
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 40vw;
    min-height: 30vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95vw;
    max-width: 90vw;
    margin: 0 auto;
  }

`;

export const ProductImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
`;

export const Overlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0;
  background: rgba(0, 0, 0, .6);
  cursor: default;
`;

export const Details = styled.div`
  width: 60vw;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 50px;
    width: 90vw;
    margin: 0;
  }

`;

export const DetailsContent = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.h1`
  font-size: 40px;
  font-weight: bold;  
  padding-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 30px;
  }
`;

export const Category = styled(Link)`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 100%;
    height: 2px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.blue};
    width: 0;
    transition: 0.2s all ease;
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }
  &:focus, &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Price = styled.span`
  font-size: 40px;
  margin-top: 30px;
  text-align: right;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: right;
    margin-top: 10px;
  }
`;

export const PriceFriction = styled.span`
  font-size: 20px;
  margin-left: 1px;
  &:first-child {
    margin-left: 0;
    margin-right: 1px;
  }
  top: -15px;
  position: relative;
`;

export const SubTitle = styled.h2`
  width: 100%;
  margin: 10px 0;
  font-size: 25px;
`;

export const Description = styled.p`
  white-space: break-spaces;
  width: 100%;
  font-size: 20px;
`;

export const Seperator = styled.hr`
  width: 95%;
  height: 2px;
  border: none;
  border-radius: 5px;
  background: #000;
  opacity: .2;
  margin: 30px 0;
`;

export const ImgPlaceholder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const Breadcrumb = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 80%;
  margin-bottom: 2%;
`;

export const BreadcrumbName = styled.span`

`;

export const BreadcrumbLink = styled(Link)`
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.blue};
  }
`;
