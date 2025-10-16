function orderCupCake() {
  const name = prompt("Enter your name?");
  if (!name) {
    alert("order cancelled");
    return;
  }

  const flavor = prompt(
    "Enter cupcake flavor (vanilla, chocolate, red velvet)?"
  );
  if (!flavor) {
    alert("order cancelled");
    return;
  }

  const quantity = prompt("Enter quantity?");
  if (!quantity || isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid number.");
    return;
  }

  alert(
    `Thank you, ${name}! Your order for ${quantity} ${flavor} cupcake(s) has been placed.`
  );
}

const orderCupCakeButton = document.getElementById("order");
if (orderCupCakeButton) {
  orderCupCakeButton.addEventListener("click", orderCupCake);
}
