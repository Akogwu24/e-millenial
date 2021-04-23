//hamburger and navbar fumctionality
const navBar = document.getElementById('nav-bar');
const menu = document.querySelector('.hamburger');
menu.addEventListener('click', () => {
  navBar.classList.toggle('appear');
});

//nav links to remove the navigation that display from clicking the hamburger
const navLinks = document.querySelectorAll('.header-element-container a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navBar.classList.remove('appear');
  });
});

//Typing text Animation
let heroText = document.querySelector('.banner-content h1');
const text = heroText.innerText;
let indexoOfTextCharcter = 0;
function typeHeroText() {
  heroText.innerText = text.slice(0, indexoOfTextCharcter);
  indexoOfTextCharcter++;
  if (indexoOfTextCharcter > text.length - 1) {
    indexoOfTextCharcter = 0;
  }
}
setInterval(typeHeroText, 400);

//modal toggle
const modal = document.querySelector('.modal');
const cartBtn = document.getElementById('cart-btn');
cartBtn.addEventListener('click', () => {
  refreshCart();
  modal.classList.add('modal-show');
  document.querySelector('body').style.overflow = 'hidden';
});

//continue shopping button functionlity
const continueShopping = document.getElementById('continue');
continueShopping.addEventListener('click', () => {
  modal.classList.remove('modal-show');
  document.querySelector('body').style.overflow = 'visible';
  localStorage.clear();
  refreshCart();
  window.location.reload();
});

//Refresher;
function refreshCart() {
  let = content = document.querySelectorAll('.content');
  if (content) {
    for (let i = 0; i < content.length; i++) {
      content[i].remove();
    }
    displayCart();
  }
}

// Array of our product Objects
const products = [
  {
    name: 'Samsungtv',
    price: 50000,
    tag: 'Samsungtv',
    inCart: 0,
  },
  {
    name: 'Pixel4a',
    price: 45000,
    tag: 'Pixel4a',
    inCart: 0,
  },
  {
    name: 'Ps5',
    price: 65000,
    tag: 'Ps5',
    inCart: 0,
  },
  {
    name: 'Macbook',
    price: 95000,
    tag: 'Macbook',
    inCart: 0,
  },
  {
    name: 'Apple',
    price: 40000,
    tag: 'Apple',
    inCart: 0,
  },
  {
    name: 'Airpods',
    price: 25000,
    tag: 'Airpods',
    inCart: 0,
  },
];

//Add to cart Buttons Funtionality
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
for (let index = 0; index < addToCartButtons.length; index++) {
  addToCartButtons[index].addEventListener('click', () => {
    cartNumbers(products[index]);
    totalCost(products[index]);
  });
}

function onLoadCartNumbers() {
  const productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.getElementById('count').textContent = productNumbers;
  }
}
//Fuction to Set The Number of items in the cart
function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if (action == 'decrease') {
    localStorage.setItem('cartNumbers', productNumbers - 1);
    document.getElementById('count').innerText = productNumbers - 1;
  } else if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.getElementById('count').innerText = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.getElementById('count').innerText = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cartCost = localStorage.getItem('totalCost');
  if (action == 'decrease') {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost - product.price);
  } else if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let cartRow = document.querySelector('.cart-items');
  if (cartItems) {
    cartRow.innerHTML = '';
    Object.values(cartItems).map((item) => {
      cartRow.innerHTML += `
         <div class="individual-cart-item-row">
           <span>${item.name}</span>
           <span class='cart-item-price'>${item.price}</span>
           <div class="cart-item-quantity">
           <button class="minus"> - </button>
           <span class='quantity'>${item.inCart}</span>
           <button class="plus"> + </button>
             <button class="remove-btn">
               Remove
             </button>
           </div>
         </div>`;
    });
    const total = localStorage.getItem('totalCost');
    document.getElementById('total').innerText = total;
  }
  removeButton();
  manageQuantity();
}

//Remove Button from Cart Functionality
function removeButton() {
  const removeButtons = document.querySelectorAll('.remove-btn');
  let productName;
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  // console.log(cartItems);
  let cartCost = localStorage.getItem('totalCost');

  for (i = 0; i < removeButtons.length; i++) {
    let removeButton = removeButtons[i];
    removeButton.addEventListener('click', () => {
      productName = removeButton.parentElement.parentElement.firstElementChild.textContent.replace(
        / /g,
        ''
      );
      localStorage.setItem(
        'cartNumbers',
        productNumbers - cartItems[productName].inCart
      );
      localStorage.setItem(
        'totalCost',
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.minus');
  let increaseButtons = document.querySelectorAll('.plus');
  let cartItems = localStorage.getItem('productsInCart');
  let currentQuantity = 0;
  let currentProduct = '';
  cartItems = JSON.parse(cartItems);
  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', () => {
      currentQuantity = document.querySelector('.quantity').textContent;
      console.log(currentQuantity);
      currentProduct = decreaseButtons[
        i
      ].parentElement.parentElement.firstElementChild.textContent.replace(
        / /g,
        ''
      );

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart = cartItems[currentProduct].inCart - 1;
        cartNumbers(cartItems[currentProduct], 'decrease');
        totalCost(cartItems[currentProduct], 'decrease');
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        displayCart();
      }
    });
  }

  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener('click', () => {
      currentQuantity = document.querySelector('.quantity').textContent;
      currentProduct =
        increaseButtons[i].parentElement.parentElement.firstElementChild
          .textContent;
      currentProduct = decreaseButtons[
        i
      ].parentElement.parentElement.firstElementChild.textContent.replace(
        / /g,
        ''
      );
      console.log(currentProduct);
      cartItems[currentProduct].inCart = cartItems[currentProduct].inCart + 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      displayCart();
    });
  }
}
onLoadCartNumbers();
displayCart();

//Cart form Valiation
//Name input Validation
const userNameInputBar = document.getElementById('user-name');
userNameInputBar.addEventListener('blur', validateName);
function validateName() {
  const userName = userNameInputBar.value.trim();
  const userNameError = document.getElementById('user-name-error');
  if (userName == '') {
    userNameError.textContent = 'Name cannot be blank please input your name';
    userNameInputBar.style.border = 'thin solid';
    userNameInputBar.style.borderColor = 'red';
  } else {
    userNameError.textContent = '';
    userNameInputBar.style.border = 'thin solid';
    userNameInputBar.style.borderColor = 'green';
  }
}

//Email Validation
const emailInputBar = document.getElementById('email');
emailInputBar.addEventListener('blur', validateEmail);
function validateEmail() {
  const email = emailInputBar.value.trim();
  const emailError = document.getElementById('email-error');
  if (email == '') {
    emailError.textContent = 'email cannot be blank please input a valid email';
    emailInputBar.style.border = 'thin solid';
    emailInputBar.style.borderColor = 'red';
  } else if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ) === false
  ) {
    emailError.textContent = 'Please input a valid email';
    emailInputBar.style.border = 'thin solid';
    emailInputBar.style.borderColor = 'red';
  } else {
    emailError.textContent = '';
    emailInputBar.style.border = 'thin solid';
    emailInputBar.style.borderColor = 'green';
  }
}
//Phone Number Validation
const phoneNumberInputBar = document.getElementById('phone-number');
phoneNumberInputBar.addEventListener('blur', validatePhoneNumber);
function validatePhoneNumber() {
  const phoneNumber = phoneNumberInputBar.value.trim();
  const phoneNumberError = document.getElementById('phone-number-error');
  if (phoneNumber == '') {
    phoneNumberError.textContent = 'Phone number cannot be blank';
    phoneNumberInputBar.style.border = 'thin solid';
    phoneNumberInputBar.style.borderColor = 'red';
  } else if (phoneNumber.length != 11) {
    phoneNumberError.textContent =
      'Invalid, Phone number must be eleven digits';
    phoneNumberInputBar.style.border = 'thin solid';
    phoneNumberInputBar.style.borderColor = 'red';
  } else {
    phoneNumberInputBar.style.border = 'thin solid';
    phoneNumberInputBar.style.borderColor = 'green';
  }
}
checkProduct();
//All validations check
function checkProduct() {
  const userName = userNameInputBar.value.trim();
  const userNameError = document.getElementById('user-name-error');
  const email = emailInputBar.value.trim();
  const emailError = document.getElementById('email-error');
  const phoneNumber = phoneNumberInputBar.value.trim();
  const phoneNumberError = document.getElementById('phone-number-error');
  let cartItems = localStorage.getItem('productsInCart');
  console.log(cartItems);
  let items = document.getElementById('content');
  if (userName == '') {
    userNameError.textContent = 'Name cannot be blank please input your name';
    userNameInputBar.style.border = 'thin solid';
    userNameInputBar.style.borderColor = 'red';
  } else if (email == '') {
    emailError.textContent = 'email cannot be blank please input a valid email';
    emailInputBar.style.border = 'thin solid';
    emailInputBar.style.borderColor = 'red';
  } else if (phoneNumber == '') {
    phoneNumberError.textContent = 'Phone number cannot be blank';
    phoneNumberInputBar.style.border = 'thin solid';
    phoneNumberInputBar.style.borderColor = 'red';
  } else if (cartItems == 0) {
    alert('You Have not Selected any Item');
  } else {
    payWithPaystack();
  }
}

//Paystack
function payWithPaystack() {
  let handler = PaystackPop.setup({
    key: 'pk_test_e09721b733f1a894c46d10a8dacfd0a48df79d8a', // Replace with your public key
    email: document.getElementById('email').value,
    amount: document.getElementById('total').textContent * 100,
    ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function () {
      alert('Window closed.');
    },
    callback: function (response) {
      let message = 'Payment complete! Reference: ' + response.reference;
      showSummary();
    },
  });
  handler.openIframe();
}
const checkOut = document.getElementById('checkout');
checkOut.addEventListener('click', () => {
  checkProduct();
});

//summary modal toogle
function showSummary() {
  document.getElementById(
    'buyer-name'
  ).innerText = userNameInputBar.value.trim();
  const summaryModal = document.querySelector('.summary-modal');
  summaryModal.classList.add('summary-modal-show');
  // let summaryModalContent = document.querySelector('.summary-modal-container');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let itemSummaryItems = document.querySelector('.item-summary-items');
  if (cartItems) {
    itemSummaryItems.innerHTML = '';
    Object.values(cartItems).map((item) => {
      itemSummaryItems.innerHTML += `
      <div class="item-summary-items">
        <div class='first-summary-item'>
          <span>${item.name}</span>
          <span>${item.inCart}</span>
        </div>
      </div>
      `;
    });
  }
  document.querySelector('body').style.overflow = 'hidden';
}

//close summary modal
const okBtn = document.getElementById('ok');
const summaryModal = document.querySelector('.summary-modal');
okBtn.addEventListener('click', () => {
  summaryModal.classList.remove('summary-modal-show');
  localStorage.clear();
  window.location.reload();
});
