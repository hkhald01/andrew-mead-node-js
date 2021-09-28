// Object proepty shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
 name: name,
 age: userAge,

 location: 'Philadelphia',
};

console.log(user);

// Object destructuring

const product = {
 label: 'Red notebook',
 price: 3,
 stock: 201,
 salePrice: undefined,
};

// const { label: newLabelName, stock, rating } = product;

// console.log(newLabelName);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
 console.log(type, label, stock);
};

transaction('order', product);
