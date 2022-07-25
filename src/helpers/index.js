
export const priceParser = (price) => {
  return parseFloat(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',').split('.')[0].replaceAll(',', '.');
};

export const getFriction = (price) => {
  return price.toString().split('.')[1] || '00';
};
