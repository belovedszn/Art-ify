import { cart } from "../cart.js";
import { getProducts } from "../data/products.js";

export function orderPayment() {
  let productPrice = 0;
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    const product = getProducts(cartItem.productId);
    productPrice += product.price * cartItem.quantity;
    cartQuantity += cartItem.quantity;
  });

  const totalBeforeTax = productPrice;
  const tax = totalBeforeTax * 0.1;
  const total = totalBeforeTax + tax;

  const paymentHTML = `
    <div class="payment-summary-title">Your Order</div>

              <div class="payment-summary-row">
                <div class="item-cart js-item-cart">Items (${cartQuantity}):</div>
                <div class="payment-summary-money">$${productPrice}</div>
              </div>

              
              <div class="payment-summary-row">
                <div>Delivery &amp; Shipping:</div>
                <div class="payment-summary-money">proceed to checkout</div>
              </div>

              <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">$${totalBeforeTax}</div>
              </div>

              <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">$${tax}</div>
              </div>

              <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">$${total}</div>
              </div>

              <button class="place-order-button button-primary">
                Proceed to checkout
              </button>
    `;

  document.querySelector(".js-payment-summary").innerHTML = paymentHTML;
}

