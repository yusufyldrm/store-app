import { action, observable, makeObservable } from 'mobx';
import api from 'api';

class ProductStore {
  categories = [];
  categoriesError = false;
  products = [];
  productsError = false;
  isLoaded = false;

  constructor() {
    makeObservable(this, {
      categories: observable,
      products: observable,
      isLoaded: observable,
      productsError: observable,
      categoriesError: observable,
      getCategories: action,
      getAllProducts: action,
      getProduct: action,
      createProduct: action,
      deleteProduct: action,
    });
    this.initialize();
  };

  setCategories = (categories) => {
    this.categories = categories;
  };

  setProducts = (products) => {
    this.products = products;
  };

  setIsLoaded = (status) => {
    this.isLoaded = status;
  };

  setCategoriesError = (status) => {
    this.categoriesError = status;
  };

  setProductsError = (status) => {
    this.productsError = status;
  };

  initialize = async () => {
    await this.getCategories();
    await this.getAllProducts();
    this.setIsLoaded(true);
  };

  getCategories = async () => {
    try {
      const { data } = await api.get('/categories');
      this.setCategories(data);
      this.setCategoriesError(false);
    } catch (error) {
      this.setCategoriesError(true);
      console.log((error.request && error.response) ? `${error.request.responseURL} :: ${error.response.statusText}` : error);
    }
  };

  getSingleCategory = async (id) => {
    try {
      if (!!id) {
        throw new Error('id is required');
      }
      const { data } = await api.get(`/categories/${id}`);
      this.setCategories(data);
    } catch (error) {
      console.log((error.request && error.response) ? `${error.request.responseURL} :: ${error.response.statusText}` : error);
    }
  };

  getAllProducts = async () => {
    try {
      const { data } = await api.get('/products');
      const categorized = this.categorizeProducts(data, this.categories);
      this.setProducts(data);
      this.setCategories(categorized);
      this.setProductsError(false);
    } catch (error) {
      this.setProductsError(true);
      console.log((error.request && error.response) ? `${error.request.responseURL} :: ${error.response.statusText}` : error);
    }
  };

  getProduct = async ({ id }) => {
    try {
      const { data } = await api.get(`/products/${id}`);
      return { product: data, error: false };
    } catch (error) {
      console.log((error.request && error.response) ? `${error.request.responseURL} :: ${error.response.statusText}` : error);
      return { product: {}, error: true };
    }
  };

  createProduct = async ({
    name,
    description,
    avatar,
    category,
    price,
    developerEmail
  }) => {
    try {
      const { data } = await api.post(`/products`, {
        name,
        description,
        avatar,
        category,
        price,
        developerEmail
      });
      return { product: data, error: false };
    } catch (error) {
      console.log((error.request && error.response) ? `${error.request.responseURL} :: ${error.response.statusText}` : error);
      return { product: null, error: true };
    }
  };

  deleteProduct = async ({ id }) => {
    try {
      const { data } = await api.delete(`/products/${id}`);
      return { result: data, error: false };
    } catch (error) {
      console.log((error.request && error.response) ? `${error.request.responseURL} :: ${error.response.statusText}` : error);
      return { result: error, error: true };
    }
  };

  categorizeProducts = (products, category) => {
    let categories = JSON.parse(JSON.stringify(category || []));
    const others = [];
    categories.forEach(category => {
      category.products = products.filter(product => product?.category === category?.name);
    });
    products.forEach(product => {
      if (!categories.find(category => category.name === product.category)) {
        others.push(product);
      }
    });

    if (others.length > 0) {
      if (!categories.find(category => category.name === 'Others')) {
        categories.push({
          id: 'others',
          name: 'Others',
          createdAt: new Date(),
          products: others,
        });
      } else {
        categories.find(category => category.name === 'Others').products = others;
      }
    }
    return categories;
  };

  // categorizeProducts = (products) => {
  //   const categorizedProducts = {};
  //   products.forEach((product) => {
  //     if (!categorizedProducts[product.category]) {
  //       categorizedProducts[product.category ? product.category : 'uncotegrie'] = [];
  //     }
  //     categorizedProducts[product.category].push(product);
  //   });
  //   return categorizedProducts;
  // };

};

export default new ProductStore();
