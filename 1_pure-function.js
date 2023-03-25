// 1
// before
const formatCurrentDate = () => new Date().toLocaleDateString();

// after
const formatDate = (date) => date.toLocaleDateString();

// 2
// before
const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const enhanceWithId = (obj) => {
  obj.id = 1;
  return obj;
};

const updatedUser = enhanceWithId(user);

// after
const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const enhanceWithId = (obj) => {
  return { ...obj, id: 1 };
};

const updatedUser = enhanceWithId(user);

// 3
// before
const taxPercent = 10;

const calculateTotalPriceWithTax = (productPrice) => {
  return productPrice * (100 - taxPercent) + productPrice;
};
// after
const taxPercent = 10;

const calculateTotalPriceWithTax = (productPrice, tax = taxPercent) => {
  return productPrice * (100 - tax) + productPrice;
};
