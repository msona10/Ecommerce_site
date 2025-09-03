let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  showCart();
}

function showCart() {
  let cartDiv = document.getElementById("cart-items");
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  showCart();
}
