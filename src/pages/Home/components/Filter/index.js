import { Dropdown, TextInput } from 'components';
import React from 'react'
import productStore from 'store/product.store';
import { Container } from './style';
import { GoSearch as Icon } from 'react-icons/go';
import { HiOutlineXCircle } from 'react-icons/hi';

const Filter = ({
  setProducts,
  immutableProducts,
  searchCategory,
  setSearchCategory,
  searchName,
  setSearchName
}) => {

  React.useEffect(() => {
    searchJob();
    // eslint-disable-next-line
  }, [immutableProducts, searchName, searchCategory.value]);

  React.useEffect(() => {
    if (productStore.categories.find(category => category.name === searchCategory.value)) {
      setSearchCategory({ value: searchCategory.value });
    } else {
      setSearchCategory({ value: 'All' });
    }
    // eslint-disable-next-line
  }, [searchCategory.value, productStore.categories]);

  const searchJob = () => {
    let result = [...immutableProducts];
    if (searchName) {
      result = [...result.filter(job => job.name.toLowerCase().includes(searchName.toLowerCase()))];
    }

    if (searchCategory.value === 'Others') {
      result = [...result.filter(job => !job.category || job.category === 'Others')];
    } else if (searchCategory.value !== 'All') {
      result = [...result.filter(job => job.category === searchCategory.value)];
    }

    setProducts(result);
  };

  return (
    <Container>
      <TextInput
        isResponsive={true}
        id={'product-name'}
        placeholder={'Seacrh Product'}
        containerStyle={{ width: '70%', maxWidth: '500px' }}
        onChange={e => setSearchName(e.target.value)}
        value={searchName}
        rounded
        leftIcon={() => <Icon size={'20px'} name={'Search'} />}
        rightIcon={() => searchName.length > 0 && <HiOutlineXCircle size={'20px'} style={{ cursor: 'pointer' }} name={'Clear'} />}
        rightIconClick={() => setSearchName('')}
      />

      <Dropdown
        key={'category'}
        options={[
          { value: 'All' },
          ...productStore.categories.map(category => ({ value: category.name }))
        ]}
        selected={searchCategory}
        change={e => setSearchCategory(e)}
        containerStyle={{ width: '20%', minWidth: '150px' }}
      />

    </Container>
  )
}

export default Filter
