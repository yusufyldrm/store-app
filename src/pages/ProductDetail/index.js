import React from 'react';
import NotFound from 'pages/NotFound';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import productStore from 'store/product.store';
import { Loader, Button } from 'components';
import { priceParser, getFriction } from 'helpers';
import Meta from 'helpers/Meta';
import { VscError } from 'react-icons/vsc';
import {
  Wrapper,
  Container,
  ImageContainer,
  Overlay,
  Details,
  DetailsContent,
  ProductImage,
  Name,
  Category,
  Price,
  PriceFriction,
  ImgPlaceholder,
  Seperator,
  SubTitle,
  Description,
  Breadcrumb,
  BreadcrumbName,
  BreadcrumbLink
} from './style';
import { useNavigate } from 'react-router-dom';

const overlayVariants = {
  initial: {
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.5
    },
    transitionEnd: {
      display: 'none'
    }
  },
  animate: {
    display: 'block',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
};

const ImagePlaceholder = () => <ImgPlaceholder><VscError size={'80%'} color={'#212121'} /></ImgPlaceholder>;

const ProductDetail = observer(() => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  const [hasError, setError] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);
  const [isProcess, setProcess] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    getSingleProduct(productId);
  }, [productId]);

  const getSingleProduct = async (id) => {
    const { product, error } = await productStore.getProduct({ id });
    !product?.category && (product.category = 'Others');
    !!product && setProduct(product);
    error && setError(error);
    setLoading(true);
  };

  const deleteProduct = async () => {
    setProcess(true);
    const { result } = await productStore.deleteProduct({ id: productId });
    console.log('result', result);
    navigate('/')
  };

  if (!isLoading) {
    return (
      <Loader iconSize={'50px'} />
    );
  }

  if (hasError) {
    return <NotFound />;
  };

  return (
    <Wrapper>
      <Meta
        title={product.name}
        description={product.description}
        image={product.avatar}
      />
      <Breadcrumb>
        <BreadcrumbLink to={'/'}>Home</BreadcrumbLink>
        <span style={{ margin: '0 5px', userSelect: 'none' }}>/</span>
        <BreadcrumbLink to={`/?category=${product.category}`}>{product.category}</BreadcrumbLink>
        <span style={{ margin: '0 5px', userSelect: 'none' }}>/</span>
        <BreadcrumbName>{product.name} {product.name}</BreadcrumbName>
      </Breadcrumb>
      <Container>
        <ImageContainer $isOpen={isOpen}>
          <Overlay
            variants={overlayVariants}
            initial='initial'
            animate={isOpen ? 'animate' : 'initial'}
            onClick={() => setOpen(false)}
          />
          <ProductImage
            src={product.avatar}
            alt={product.name}
            onClick={() => setOpen(!isOpen)}
            onError={e => { e.target.style = 'display: none'; setImageError(true) }}
            loading='lazy'
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          />
          {imageError && <ImagePlaceholder />}
        </ImageContainer>

        <Details>
          <DetailsContent>
            <div>
              <Name>{product.name}</Name>
              <Category to={`/?category=${product.category}`}>{product.category}</Category>
            </div>
            <Price>
              <PriceFriction>$</PriceFriction>
              <strong>{priceParser(product.price)}</strong>
              <PriceFriction>{getFriction(product.price)}</PriceFriction>
            </Price>
          </DetailsContent>
        </Details>
      </Container>
      <Seperator />

      <SubTitle>Description</SubTitle>
      <Description>{product.description}</Description>

      <Button
        title={'Delete Product'}
        onClick={deleteProduct}
        isLoading={isProcess}
        style={{ width: 'auto', float: 'right' }}
        bg={'#f44336'}
        textColor={'#fff'}
      />
    </Wrapper>
  )
});

export default ProductDetail;
