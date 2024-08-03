import { cart, addToCart } from "../cart.js";
import { products } from "../data/top-rated.js";

let productsHTML = "";


products.forEach((product) => {
  productsHTML += `
      <div class="top-rated-box">
                <div class="top-rated-slide-img">
                  <img src="${product.image}" />
                  <div class="top-rated-overlay">
                    <a class="top-rated-buy-btn js-top-rated-btn"
                    data-product-id="${product.id}">Buy Now</a>
                  </div>
                </div>
                <div class="top-rated-detail-box">
                  <div class="top-rated-type">
                    <a>${product.name}</a>
                    <span>${product.artist}</span>
                  </div>
                  <a class="top-rated-price">$${product.price}</a>
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

document.querySelector(".js-top-rated").innerHTML = productsHTML;

document.querySelectorAll(".js-top-rated-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
  });
});
