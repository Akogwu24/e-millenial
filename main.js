//header scroll functionality
// const header = document.querySelector('header');
// window.addEventListener('scroll', () => {
//   header.classList.toggle('sticky', window.scrollY > 0);
// });

//hamburger and navbar fumctionality
const navBar = document.getElementById('nav-bar');
const menu = document.querySelector('.hamburger');
menu.addEventListener('click', () => {
  navBar.classList.toggle('appear');
});

//modal toggle
const modal = document.querySelector('.modal');
const cartBtn = document.getElementById('cart-btn');

cartBtn.addEventListener('click', () => {
  modal.classList.add('modal-show');
});

//continue shopping button functionlity
const continueShopping = document.getElementById('continue');
continueShopping.addEventListener('click', () => {
  modal.classList.remove('modal-show');
});

// remove button functionality
const removeBtn = document.querySelectorAll('.remove-btn');

for (
  let cartRowToRemove = 0;
  cartRowToRemove < removeBtn.length;
  cartRowToRemove++
) {
  let removeButton = removeBtn[cartRowToRemove];
  removeButton.addEventListener('click', (event) => {
    let clickedRemoveButton = event.target;

    // console.log(clickedRemoveButton);
    clickedRemoveButton.parentElement.parentElement.remove();

    updateCartTotal();
  });
}

function updateCartTotal() {
  //get the cart row
  const cartItemContainer = document.getElementsByClassName('cart-items')[0];
  const cartRows = cartItemContainer.getElementsByClassName(
    '.individual-cart-item-row'
  );
  console.log(cartRows.length);
  for (let priceEntry = 0; priceEntry < cartRows.length; priceEntry++) {
    let cartRow = cartRows[priceEntry];
    console.log(cartRow);
    //to get the price and covert to number
    cartPriceElement = cartRow.getElementsByClassName('cart-price')[0];
    // let cartItemPrice = parseInt(cartPriceElement.innerHTML.replace('$', ''));

    console.log(cartItemPriceElement);
    //to get the quantity
    const quantityElement = removeBtn[priceEntry].previousElementSibling.value;
    console.log(cartItemPriceElement);
  }
}
updateCartTotal();

//Add Item to Cart
// const addToCartButton = document.querySelectorAll('.add-to-cart-btn');
// console.log(addToCartButton);
// for (eachButton = 0; addToCartButton.length  eachButton++){
