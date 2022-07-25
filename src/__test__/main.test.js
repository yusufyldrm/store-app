import api, { API_URL } from 'api';
import { product } from './__mock__';
import Header from 'components/Header';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import {
  screen,
  render,
  waitFor
} from './test-utils';

describe('Testing Components', () => {
  it('should register text in header', () => {
    const { container } = render(<Header />)
    const linkElement = screen.getByText(/Register/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.children).toMatchSnapshot();
  });

  it('should render text input', () => {
    const { container } = render(<TextInput id={'test'} onChange={() => { }} />)
    const input = container.querySelector('input');
    input.value = 'test';
    expect(input.value).toBe('test');
  });

  it('should render button', () => {
    const { container } = render(<Button />)
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('should render button with text', () => {
    const { container } = render(<Button>Test</Button>)
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Test');
  });

  it('should render button with text and onClick', () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick}>Test</Button>)
    const button = container.querySelector('button');
    button.click();
    expect(onClick).toHaveBeenCalled();
  });

  it('should render dropdown', () => {
    const options = [{ value: 'test' }, { value: 'test2' }];
    const { container } = render(<Dropdown options={options} selected={options[0]} />)
    const dropdown = container.querySelector('select');
    expect(dropdown).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

});

describe('Testing Api', (prod) => {
  it('should load user data', async () => {
    const { data } = await api.get(`${API_URL}/products`);
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(Array);
  });

  it('should create a product', async () => {
    const { data } = await api.post(`${API_URL}/products`, product);
    waitFor(() => {
      expect(data).toBeDefined();
      expect(data).toBeInstanceOf(Object);
      prod = data;
    }, 2000);
  });

  it('should get the created product', async () => {
    const { data } = await api.get(`${API_URL}/products/${prod.id}`);
    expect(data).toBeDefined();
    expect(data).toMatchObject(prod);
  });

  it('should delete a product', async () => {
    const { data } = await api.delete(`${API_URL}/products/${prod.id}`);
    waitFor(() => {
      expect(data).toBeDefined();
      expect(data).toBeInstanceOf(Object);
    }, 2000);
  });

  it('should get the categories', async () => {
    const { data } = await api.get(`${API_URL}/categories`);
    waitFor(() => {
      expect(data).toBeDefined();
      expect(data).toBeInstanceOf(Array);
    }, 2000);
  });

});
