//the following function will take you to the next section on click of the order now button.
// var page = document.getElementById("menu-page");
// document.getElementById("order-now").addEventListener("click", () => {
//   console.log("clicked");
//   page.scrollIntoView();
// });
//pizza prices
const smallPizzaPrice = [700];
const mediumPizza = [900];
const largePizza = [1200];
//pizza size
const size = ["small", "medium", "large"];
//topping price
const toppings = { extraCheese: 100, peperoni: 90, pineapple: 50 };
const crust = { glutenFree: 150, stuffed: 200, crispy: 300 };

// $(document).ready(function () {
//   $("#checkout-btn").click(function () {
//     $("#order-checkout").show();
//   });
// });

const modal = document.getElementById("order-checkout");
const checkout = document.getElementById("checkout-btn");
const order = document.getElementById("place-order");

checkout.addEventListener("click", function () {
  console.log("clicked");
  modal.style.display = "block";
});
order.addEventListener("click", function () {
  console.log("clicked");
  modal.style.display = "none";
});

//checking valid inputs
document.getElementById("checkout-btn").addEventListener("click", function () {
  const toppings = document.getElementById("toppings").value;
  const crust = document.getElementById("crust").value;
  const size = document.getElementById("size").value;
  const quantity = document.getElementById("quantity").value;
  console.log();
  if (toppings == "Select Topping") alert("Topping Required");
  else if (crust == "Select Crust") alert("Crust Required");
  else if (size == "Select Size") alert("Size Required");
  else if (quantity == "Enter Number") alert("Number Required");

  
});

