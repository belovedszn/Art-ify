import { cart, addToCart } from "../cart.js";
import { products } from "../data/launch-soon.js";

let productsHTML = "";


products.forEach((product) => {
  productsHTML += `
      <div class="launch-box">
                <div class="launch-slide-img">
                  <img src="${product.image}" />
                  <div class="launch-overlay">
                    <a class="launch-buy-btn js-launch-btn"
                    data-product-id="${product.id}">Place Bid</a>
                  </div>
                </div>
                <div class="launch-detail-box">
                  <div class="launch-type">
                    <a>${product.name}</a>
                    <span>${product.artist}</span>
                  </div>
                  <a class="launch-price">$${product.price}</a>
                </div>
              </div>
      `;
});

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

document.querySelector(".js-launch-soon").innerHTML = productsHTML;

document.querySelectorAll(".js-launch-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
  });
});
