//Quantity Button
const quantityDisplay = document.getElementById("quantity");
const plusBtn = document.getElementById("plusbtn");
const minusBtn = document.getElementById("minusbtn");
const pdreamPrice = document.getElementById("pdreamprice");

let quantity = 1;

plusBtn.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
    pdreamPrice.textContent = "$"+quantity*70+".00 AUD";
});

minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
        pdreamPrice.textContent = "$"+quantity*70+".00 AUD";
    }
    
});