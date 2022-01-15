//the following function will take you to the next section on click of the order now button.
var page = document.getElementById("menu-page");

document.getElementById("order-now").addEventListener("click", () => {
  page.scrollIntoView();
});

