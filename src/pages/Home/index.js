import React from 'react';
import { observer } from 'mobx-react';
import productStore from 'store/product.store';
import { useNavigate, useLocation } from 'react-router-dom';
import { getsinglePath } from 'utils/router';
import { Loader } from 'components';
import { Product, Filter } from './components';
import { ProductsContainer, BottomButton } from './style';

const Home = observer(() => {
  const loc = useLocation();
  const query = new URLSearchParams(loc.search);
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [searchCategory, setSearchCategory] = React.useState({ value: 'All' });
  const [searchName, setSearchName] = React.useState('');

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {
    if (!!query.get('category') && query.get('category') !== 'all') {
      setSearchCategory({ value: query.get('category') });
    } else if (query.get('category') === null) {
      setSearchCategory({ value: 'All' });
    }
    // eslint-disable-next-line
  }, [query.get('category')]);

  const init = async () => {
    productStore.isLoaded && await productStore.getAllProducts();
  };

  if (!productStore.isLoaded) {
    return <Loader />
  }

  return (
    <>
      <Filter
        immutableProducts={productStore.products}
        setProducts={(prods) => setProducts(prods)}
        searchCategory={searchCategory}
        searchName={searchName}
        setSearchCategory={(category) => setSearchCategory(category)}
        setSearchName={(name) => setSearchName(name)}
      />

      <ProductsContainer>
        {products.length > 0 ? products.map((product) => (
          <Product
            key={product.id}
            idx={product.id}
            name={product.name}
            price={product.price}
            avatar={product.avatar}
            searchText={searchName}
          />
        ))
          :
          <div>No products</div>
        }
      </ProductsContainer>

      <BottomButton
        onClick={() => navigate(getsinglePath('createProduct').path)}
        whileTap={{ scale: 0.9 }}
        whileHover={{
          scale: 1.1,
          transition: {
            type: 'spring',
            duration: 1,
            stiffness: 100
          },
        }}
      >
        +
      </BottomButton>
    </>
  )
});

export default Home;