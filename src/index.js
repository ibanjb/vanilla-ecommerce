// include CSS styles into bundle
import './styles/style.scss';

const product = {
  goku: 'goku',
  naruto: 'naruto',
  jawa: 'jawa',
};

const action = {
  add: 'add',
  remove: 'remove',
};

const prices = {
  goku: 5,
  naruto: 20,
  jawa: 7.5,
};

const shoppingCart = {
  items: 0,
  subTotal: 0,
  doubleDiscount: 0,
  bulkDiscount: 0,
  total: 0,
  gokuQuantity: 0,
  narutoQuantity: 0,
  jawaQuantity: 0,
};

const updateValue = (element, value) => {
  if (element) {
    const item = document.getElementById(element);
    item.value = value;
  }
};

const updateInnerText = (element, value) => {
  if (element) {
    const item = document.getElementById(element);
    item.innerText = value;
  }
};

const updateDoubleDiscount = (
  quantity,
  title,
  innerTitle,
  priceTitle,
  price
) => {
  let discountPrice = 0;
  if (quantity < 2) {
    updateInnerText(title, '');
    updateInnerText(priceTitle, '');
    shoppingCart.doubleDiscount = 0;
    return;
  }
  const hasDiscount = quantity % 2;
  if (hasDiscount === 0) {
    const discount = quantity / 2;
    discountPrice = discount * price;
    updateInnerText(
      title,
      `${shoppingCart.gokuQuantity} x ${discount} ${innerTitle} POP offer`
    );
    updateInnerText(priceTitle, `-${discountPrice} €`);
    shoppingCart.doubleDiscount = discountPrice;
  }
};

const updateBulkDiscount = (quantity, title, innerTitle, price) => {
  let discountPrice = 0;
  if (quantity < 3) {
    updateInnerText(title, '');
    updateInnerText(price, '');
    shoppingCart.bulkDiscount = 0;
    return;
  }
  const hasDiscount = quantity % 3;
  if (hasDiscount === 0) {
    const discount = quantity / 3;
    discountPrice = discount * 1;
    updateInnerText(title, `${quantity} x ${discount} ${innerTitle} POP offer`);
    updateInnerText(price, `-${discountPrice} €`);
    shoppingCart.bulkDiscount = discountPrice;
  }
};

const updateTotals = () => {
  updateDoubleDiscount(
    shoppingCart.gokuQuantity,
    'goku-discount-title',
    'Goku',
    'goku-discount-price',
    prices.goku
  );
  updateBulkDiscount(
    shoppingCart.narutoQuantity,
    'naruto-discount-title',
    'Naruto',
    'naruto-discount-price'
  );
  shoppingCart.total =
    shoppingCart.gokuQuantity * prices.goku +
    shoppingCart.narutoQuantity * prices.naruto +
    shoppingCart.jawaQuantity * prices.jawa -
    shoppingCart.doubleDiscount -
    shoppingCart.bulkDiscount;

  updateInnerText('total-cost', `${shoppingCart.total} €`);
};

const updateSubTotal = () => {
  const { gokuQuantity, narutoQuantity, jawaQuantity } = shoppingCart;
  const items = gokuQuantity + narutoQuantity + jawaQuantity;
  const subTotal =
    shoppingCart.gokuQuantity * prices.goku +
    shoppingCart.narutoQuantity * prices.naruto +
    shoppingCart.jawaQuantity * prices.jawa;
  shoppingCart.items = items;
  shoppingCart.subTotal = subTotal;
  updateInnerText('order-summary-title', `${items} items`);
  updateInnerText('order-summary-price', `${subTotal} €`);
};

const updateOrderSummary = () => {
  updateSubTotal();
  updateTotals();
};

const productAction = (type, operation) => {
  let units = 0;
  let price = 0;
  let inputElement;
  let totalElement;
  switch (type) {
    case product.goku:
      if (operation === action.add) {
        shoppingCart.gokuQuantity += 1;
      } else if (shoppingCart.gokuQuantity > 0) {
        shoppingCart.gokuQuantity -= 1;
      }
      units = shoppingCart.gokuQuantity;
      price =
        shoppingCart.gokuQuantity > 0
          ? shoppingCart.gokuQuantity * prices.goku
          : 0;
      inputElement = 'goku-product';
      totalElement = 'goku-total';
      break;
    case product.naruto:
      if (operation === action.add) {
        shoppingCart.narutoQuantity += 1;
      } else if (shoppingCart.narutoQuantity > 0) {
        shoppingCart.narutoQuantity -= 1;
      }
      units = shoppingCart.narutoQuantity;
      price =
        shoppingCart.narutoQuantity > 0
          ? shoppingCart.narutoQuantity * prices.naruto
          : 0;
      inputElement = 'naruto-product';
      totalElement = 'naruto-total';
      break;
    case product.jawa:
      if (operation === action.add) {
        shoppingCart.jawaQuantity += 1;
      } else if (shoppingCart.jawaQuantity > 0) {
        shoppingCart.jawaQuantity -= 1;
      }
      units = shoppingCart.jawaQuantity;
      price =
        shoppingCart.jawaQuantity > 0
          ? shoppingCart.jawaQuantity * prices.jawa
          : 0;
      inputElement = 'jawa-product';
      totalElement = 'jawa-total';
      break;
    default:
      break;
  }
  updateValue(inputElement, units);
  updateInnerText(totalElement, `${price} €`);
  updateOrderSummary();
};

const addProduct = (type) => {
  productAction(type, 'add');
};

const removeProduct = (type) => {
  productAction(type, 'remove');
};

const checkout = () => {
  // TODO: Nothing to do in this PoC :)
  // eslint-disable-next-line no-console
  console.log('checkout!');
};

const gokuAdd = document.getElementById('goku-add');
gokuAdd.onclick = () => addProduct(product.goku);

const gokuRemove = document.getElementById('goku-remove');
gokuRemove.onclick = () => removeProduct(product.goku);

const narutoAdd = document.getElementById('naruto-add');
narutoAdd.onclick = () => addProduct(product.naruto);

const narutoRemove = document.getElementById('naruto-remove');
narutoRemove.onclick = () => removeProduct(product.naruto);

const jawaAdd = document.getElementById('jawa-add');
jawaAdd.onclick = () => addProduct(product.jawa);

const jawaRemove = document.getElementById('jawa-remove');
jawaRemove.onclick = () => removeProduct(product.jawa);

const checkoutButton = document.getElementById('checkout-button');
checkoutButton.onclick = () => checkout();
