import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import productStore from 'store/product.store';
import { useNavigate } from 'react-router-dom';
import Meta from 'helpers/Meta';
import {
  TextInput,
  Dropdown,
  Button
} from 'components';
import {
  Wrapper,
  Title,
  Container
} from './style';

const PRODUCT = {
  name: { value: '', error: '' },
  description: { value: '', error: '' },
  avatar: { value: '', error: '' },
  category: { value: '', error: '' },
  price: { value: 0, error: '' },
  developerEmail: { value: 'yusuffyldrm1@gmail.com', error: '' }
}

const CreateProduct = observer(() => {
  const navigate = useNavigate();
  const [product, setProduct] = React.useState(PRODUCT);
  const [isProcess, setProcess] = React.useState(false);

  const handleInput = (name, val) => {
    setProduct({ ...product, [name]: { value: val, error: '' } });
  };

  const handleSubmit = async () => {
    setProcess(true);
    const errors = {};
    Object.keys(product).forEach(key => {
      if (product[key].value.length === 0 || product[key].value <= 0) {
        errors[key] = 'This field is required';
      }
    });

    if (Object.keys(errors).length) {
      Object.keys(errors).forEach(key => {
        setProduct(p => ({ ...p, [key]: { ...p[key], error: errors[key] } }));
      });
      setProcess(false);
      return;
    }

    const { error } = await productStore.createProduct({
      name: product.name.value,
      description: product.description.value,
      avatar: product.avatar.value,
      category: product.category.value,
      price: product.price.value,
      developerEmail: product.developerEmail.value
    });
    if (error) {
      setProcess(false);
      return;
    }
    navigate('/');
  };

  return (
    <Wrapper>
      <Meta
        title={'Create Product'}
      />
      <Title>Create Product</Title>
      <Container>
        <TextInput
          id='name'
          autoComplete='off'
          type='text'
          label='Name'
          placeholder='Product Name'
          onChange={(e) => handleInput('name', e.target.value)}
          value={product.name.value}
          error={product.name.error}
          required
        />

        <TextInput
          as={'textarea'}
          id='description'
          type='text'
          label='Description'
          placeholder='Describe Your Product'
          onChange={(e) => handleInput('description', e.target.value)}
          value={product.description.value}
          error={product.description.error}
          required
        />

        <TextInput
          id='avatar'
          type='text'
          label='Image'
          placeholder='Product Image Url'
          onChange={(e) => handleInput('avatar', e.target.value)}
          value={product.avatar.value}
          error={product.avatar.error}
          required
        />

        <Dropdown
          key={'category'}
          label={'Category'}
          defaultValue={'Select Category'}
          options={[...toJS(productStore.categories).map(category => ({ value: category.name }))]}
          selected={product.category}
          error={product.category.error}
          change={(e) => handleInput('category', e.value)}
          required
        />

        <TextInput
          id='price'
          type='number'
          min='0'
          onBlur={(e) => { e.target.value < 0 && handleInput('price', 0); handleInput('price', parseFloat(e.target.value)) }}
          label='Price'
          onChange={(e) => handleInput('price', e.target.value)}
          value={product.price.value}
          error={product.price.error}
          required
        />

        <Button
          title='Create'
          onClick={handleSubmit}
          isLoading={isProcess}
        />
      </Container>
    </Wrapper>
  )
})

export default CreateProduct;
