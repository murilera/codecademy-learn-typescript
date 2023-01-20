import products from './products';

const productName = 'fanny pack';

const product = products.filter(p => p.name === productName);
const preOrder = products.filter(p => p.preOrder === 'true');

console.log(preOrder);

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress = '575 Broadway, New York City, New York';

preOrder.map(p => {
  if (parseInt(p.price) > 25) {
    shipping = 0;
  } else {
    shipping = 5;
  }
  if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
  } else {
    taxPercent = 0.05;
  }
  taxTotal = parseInt(p.price) * taxPercent;
  total = parseInt(p.price) + taxTotal + shipping;

  console.log(`
  Product:  ${p.name}
  Address:  ${shippingAddress}
  Price:    $${p.price}
  Tax:      $${taxTotal.toFixed(2)}
  Shipping: $${shipping.toFixed(2)}
  Total:    $${total.toFixed(2)}
  `);
});
