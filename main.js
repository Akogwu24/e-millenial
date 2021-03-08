//header scroll functionality
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

//hamburger and navbar fumctionality
const navBar = document.getElementById("nav-bar");
const menu = document.querySelector(".hamburger");
menu.addEventListener("click", () => {
  navBar.classList.toggle("appear");
});

//cart click fo checkout modal
const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", () => {
  modal.classList.toggle("dialog-toggle");
});

//modal toggle functionality
const continueShopping = document.getElementById("continue-shopping-btn");
const modal = document.getElementById("modal-box");
continueShopping.addEventListener("click", () => {
  modal.classList.remove("dialog-toggle");
});

// remove button functionality
const removeFromCartBtn = document.querySelectorAll(".remove");
for (let i = 0; i < removeFromCartBtn.length; i++) {
  let removeBtn = removeFromCartBtn[i];
  removeBtn.addEventListener("click", (event) => {
    let clickedButton = event.target;
    clickedButton.parentElement.parentElement.remove();
  });
}

//updation amount to be paid

// //Add to Cart Button
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
function addToCart() {
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      //selceted item name
      let selectedItemName = event.target.previousElementSibling.innerHTML;

      let nameOfaddedItemInCart = document.querySelector(
        ".product-name-in-dialog"
      );
      nameOfaddedItemInCart = selectedItemName;
      console.log(nameOfaddedItemInCart);
      //selected item price
      let selectedItemPrice = event.target.parentElement.querySelector(
        ".checkout-price"
      ).innerHTML;

      let priceOfSelectedItemInCart = document.querySelector(
        ".product-price-in-dialog"
      );
      priceOfSelectedItemInCart = selectedItemPrice;

      const actualPrice = parseInt(priceOfSelectedItemInCart.replace("$", ""));
      console.log(actualPrice);

      let itemRow = document.createElement("tr");
      let cartSelection = document.querySelector(".item-section");
      itemRow.classList.add("table");

      let itemRowContents = `
      <tr class='added-item'>
      <td>1</td>
      <td class= "product product-name-in-dialog">${nameOfaddedItemInCart}</td>
      <td class="product-price-in-dialog">${actualPrice}</td>
      <td>
        <span class='decrease-items'>-</span>
        <span class='checkout-quantity'>1</span>
        <span class='increase-items'>+</span>
      </td>
      <td><button class='remove'>remove</button></td>
    </tr> `;
      itemRow.innerHTML = itemRowContents;
      cartSelection.append(itemRow);
    });
  });
}
addToCart();
