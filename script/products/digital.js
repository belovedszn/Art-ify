import { cart, addToCart, saveCart } from "../cart.js";
import { products } from "../data/digital.js";

let productsHTML = "";
saveCart();

products.forEach((product) => {
  productsHTML += `
      <div class="products-box">
                <div class="products-img-box">
                  <img class="products-img"
                    src="${product.image}"
                  />
                </div>
                <div class="products-type-box">
                  <div class="products-type">
                    <a href="#">${product.name}</a>
                    <span>${product.artist}</span>
                  </div>
                  <a href="#" class="products-price">$${product.price}</a>
                </div>
                <button class="cart-btn js-cart-btn"
                data-product-id="${product.id}">Add To Cart</button>
                <button class="cart-svg-btn"><i class="bi bi-cart2 js-bi-cart2"></i></button>
              </div>
      `;
});

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

  saveCart();
}

document.addEventListener("DOMContentLoaded", (event) => {
  let cart = JSON.parse(localStorage.getItem("myCart"));

  updateCartQuantity();

  document.querySelectorAll(".js-cart-btn").forEach((button) => {
    const productId = button.dataset.productId;
    const itemIndex = cart.findIndex(
      (cartItem) => cartItem.productId === productId
    );

    if (itemIndex !== -1) {
      button.classList.add("btn-added");
      button.innerHTML = '<i class="bi bi-check2"></i>';
      button.disabled = true;
    }
  });
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

document.querySelectorAll(".js-cart-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();

    button.classList.add("btn-added");
    button.innerHTML = '<i class="bi bi-check2"></i>';
    button.disabled = true;
  });
});
