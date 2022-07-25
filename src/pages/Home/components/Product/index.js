import React from 'react';
import PropTypes from 'prop-types';
import { VscError } from 'react-icons/vsc';
import { priceParser, getFriction } from 'helpers';
import {
  Card,
  LinkContainer,
  Image,
  Detail,
  Name,
  Price,
  PriceFriction,
  ImgPlaceholder
} from './style';
import { PreLoader } from 'components';

const ImagePlaceholder = () => <ImgPlaceholder><VscError size={'80%'} color={'#212121'} /></ImgPlaceholder>;

const TRANSITION = {
  type: 'spring',
  duration: 1,
  stiffness: 100
};

const Product = ({
  idx,
  name,
  price,
  avatar,
  searchText
}) => {
  const [isImageError, setImageError] = React.useState(false);
  const [isImageLoaded, setImageLoded] = React.useState(false);

  const getHighlightedText = (text, searchText) => {
    if (searchText === '') {
      return text;
    }
    const parts = text.split(new RegExp(`(${searchText.replaceAll('(', '').replaceAll(')', '')})`, 'gi'));
    return (
      parts.map((part, i) =>
        <span key={i} style={part.toLowerCase() === searchText.toLowerCase() ? { color: 'red', /* fontSize: '18px' */ } : {}}>
          {part}
        </span>
      ));
  };

  return (
    <Card
      whileHover={{
        scale: 1.05,
        transition: TRANSITION
      }}
    >
      <LinkContainer to={`/product/${idx}`} >
        <Image
          src={avatar}
          alt={name}
          onLoad={() => setImageLoded(true)}
          onError={e => { e.target.style = 'display: none'; setImageError(true) }}
          loading='lazy'
        />
        {(!isImageLoaded && !isImageError) && <PreLoader style={{ position: 'absolute', inset: 0, margin: 'auto' }} />}
        {isImageError && <ImagePlaceholder />}

        <Detail>
          <Name title={name}>{getHighlightedText(name, searchText)}</Name>
          <Price>
            <PriceFriction>$</PriceFriction>
            <strong>{priceParser(price)}</strong>
            <PriceFriction>{getFriction(price)}</PriceFriction>
          </Price>
        </Detail>
      </LinkContainer>
    </Card>
  )
};

Product.propTypes = {
  idx: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  avatar: PropTypes.string,
};

Product.defaultProps = {
  name: '',
  price: '',
  avatar: '',
};

export default Product;
