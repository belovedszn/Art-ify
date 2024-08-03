import { cart, removeFromCart, saveCart } from "./cart.js";
import { products, getProducts } from "./data/products.js";
import { orderPayment } from "./checkout/payment.js";

orderPayment();

let cartHTML = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  const matchingProduct = getProducts(productId);

  cartHTML += `
     <div class="cart-item-container js-container-${matchingProduct.id}">
                <div class="cart-item-details-grid">
                  <img
                    class="product-image"
                    src="${matchingProduct.image}"
                  />

                  <div class="cart-item-details">
                    <div class="product-name">
                      ${matchingProduct.name}
                      <span>By ${matchingProduct.artist}</span>
                      <p class="web">
                        ${matchingProduct.writeUp}
                      </p>
                      <div class="mobile">
                        <div class="product-price mobile">$${matchingProduct.price}</div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash3-fill js-delete" data-product-id="${matchingProduct.id}"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="web">
                    <div class="product-price">$${matchingProduct.price}</div>
                    <div class="product-quantity">
                      <div class="web-delete js-delete" data-product-id="${matchingProduct.id}">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="mobile-text mobile">
                  ${matchingProduct.writeUp}
                </p>
              </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = cartHTML;

document.querySelectorAll(".js-delete").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-container-${productId}`);

    container.remove();
    orderPayment();
    saveCart();
    updateCartQuantity();   
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  let cart = JSON.parse(localStorage.getItem("myCart"));

  updateCartQuantity();
});

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

   
  });
  
  document.querySelector(
    ".js-checkout-item"
  ).innerHTML = `Item (${cartQuantity})`;
  
  saveCart();
  updateCartQuantity();
} 

 