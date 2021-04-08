//modal toggle
const modal = document.querySelector('.modal');
const cartBtn = document.getElementById('cart-btn');

cartBtn.addEventListener('click', () => {
  modal.classList.add('modal-show');
  document.querySelector('body').style.overflow = 'hidden';
});

// function updateCartTotal() {
//   const cartItemContainer = document.getElementsByClassName('cart-items')[0];
//   let cartRows = cartItemContainer.getElementsByClassName(
//     'individual-cart-item-row'
//   );
//   let total = 0;
//   for (let index = 0; index < cartRows.length; index++) {
//     let cartRow = cartRows[index];
//     let cartPriceElement = cartRow.getElementsByClassName('cart-item-price')[
//       index
//     ];
//     // console.log(cartPriceElement.innerText);
//     // const quantityElement = cartRow.getElementsByClassName(
//     //   'cart-item-quantity'
//     // )[index].firstElementChild;
//     let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[
//       index
//     ];

//     let price = parseFloat(cartPriceElement.innerText.replace('NGN', ''));
//     const quantity = quantityElement.value;
//     total = price * quantity;
//     index++;
//   }

//   document.getElementById('total').innerText = 'NGN' + total;
// }

//input amount functionality
// const quantityInputs = document.getElementsByClassName('cart-quantity-input');
// for (index = 0; index < quantityInputs.length; index++) {
//   let input = quantityInputs[index];
//   input.addEventListener('change', quantityChanged);
//   updateCartTotal();
//   index++;
// }
// function quantityChanged(event) {
//   let input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updateCartTotal();
// }

// // Add To Cart Button Functionality
// const addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
// for (index = 0; index < addToCartButtons.length; index++) {
//   let button = addToCartButtons[index];
//   button.addEventListener('click', addToCartClicked);
// }

// function addToCartClicked(event) {
//   const button = event.target;
//   const title = button.previousElementSibling.innerText;
//   const price = button.parentElement.querySelector('.checkout-price').innerText;
//   addItemToCart(title, price);
//   // updateCartTotal();
// }
// function addItemToCart(title, price) {
//   const cartRow = document.createElement('div');
//   const cartItems = document.querySelector('.cart-items');
//   // cartRow.classList.add('cart-row');
//   const cartRowContent = `
//   <div class="individual-cart-item-row">
//     <span>${title}</span>
//     <span class='cart-item-price'>${price}</span>
//     <div class="cart-item-quantity">
//       <input  class='cart-quantity-input' value='1'  type='number'>
//       <button class="remove-btn">
//         Remove
//       </button>
//     </div>
//   </div>`;
//   cartRow.innerHTML = cartRowContent;
//   cartItems.append(cartRow);

//   cartRow
//     .querySelector('.remove-btn')
//     .addEventListener('click', removeCartItem);

//   cartRow
//     .querySelector('.cart-quantity-input')
//     .addEventListener('change', quantityChanged);
// }

// const removeCartItemButton = document.querySelectorAll('.remove-btn');
// for (let index = 0; index < removeCartItemButton.length; index++) {
//   let clickedRemoveButton = removeCartItemButton[index];
//   clickedRemoveButton.addEventListener('click', removeCartItem);
//   cartNumbers(products[removeItemBtn.length]);
//   // updateCartTotal();
// }

// function removeCartItem(event) {
//   const buttonClicked = event.target;
//   console.log(buttonClicked);
//   buttonClicked.parentElement.parentElement.remove();
// }

//tracking the clicked button
// const buttons = document.querySelectorAll('.add-to-cart-btn');
// console.log(buttons);
// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     const clickedButton = event.target;
//     console.log(clickedButton);
//   });
// });
