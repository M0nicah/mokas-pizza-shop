$(document).ready(() => {
  const page = document.getElementById("menu-page");
  const orderButton = $("#order-btn");

  orderButton.click(function () {
    page.scrollIntoView();
  });
  // delivery fee
  const delivery = 300;

  // pizza size and price
  const sizes = { small: 700, medium: 900, large: 1200 };

  // topping price
  const toppings = { extraCheese: 100, peperoni: 90, pineapple: 50 };
  const crusts = { glutenFree: 150, stuffed: 200, crispy: 300 };

  // Html elements
  const modal = document.getElementById("order-checkout");
  const checkout = $("#checkout-btn");
  // const order = document.getElementById("place-order");

  // Click listeners
  document.getElementById("place-order").addEventListener("click", function () {
    modal.style.display = "none";
  });

  checkout.click(function () {
    // Option values
    const topping = document.getElementById("toppings").value;
    const crust = document.getElementById("crust").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;

    // Checking for invalid input
    if (topping == "Select Topping") alert("Topping Required");
    else if (crust == "Select Crust") alert("Crust Required");
    else if (size == "Select Size") alert("Size Required");
    else if (quantity == "") alert("Number Required");
    else {
      modal.style.display = "block";
    }

    // Displaying order details
    document.getElementById(
      "topping"
    ).innerHTML = `Topping: ${toppings[topping]}`;
    document.getElementById("crust-type").innerHTML = `Crust: ${crusts[crust]}`;
    document.getElementById("pizza-size").innerHTML = `Size: ${sizes[size]}`;
    document.getElementById("delivery").innerHTML = `Delivery Fee: ${delivery}`;
    document.getElementById(
      "pizza-quantity"
    ).innerHTML = `Quantity: ${quantity}`;

    document.getElementById("total").innerHTML = `Total: ${
      (toppings[topping] + crusts[crust] + sizes[size] + delivery) * quantity
    }`;
  });
});
