console.log("connected")

//*Cart*//
let price = 125.00;
let quantity = 0;

let addToCartButton = document.getElementById("addToCartButton");
addToCartButton.addEventListener("click", function(){
  let inputQuantity = document.getElementById("inputQuantity");
  quantity += parseInt(inputQuantity.value);
  let totalPrice = price * quantity;
  let basketInfo = document.getElementById("basketInfo");
  basketInfo.innerHTML = `
    <p>${price} x ${quantity} $${totalPrice}</p>
  `;
});

