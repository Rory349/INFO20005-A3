//Quantity Button
const quantityDisplay = document.getElementById("quantity");
const plusBtn = document.getElementById("plusbtn");
const minusBtn = document.getElementById("minusbtn");
const pdreamPrice = document.getElementById("pdreamprice");
const mbPrice = document.getElementById("mbprice")
const plusBtnMb = document.getElementById("plusbtnmb");
const minusBtnMb = document.getElementById("minusbtnmb");
const quantityMb = document.getElementById("quantitymb");
const mbPriceCart = document.getElementById("mbpricecart");
const totalPrice = document.getElementById("totalprice");

let quantity = 1;
let quantitymb = 1;

plusBtn.addEventListener("click", () => {
    quantity++;

    quantityDisplay.textContent = quantity;

    if (pdreamPrice) {
        pdreamPrice.textContent = "$" + (quantity * 70) + ".00 AUD";
    }

    if (mbPrice) {
        mbPrice.textContent = "$" + (quantity * 95) + ".00 AUD";
    }
    totalPrice.textContent = "AU$" + ((quantitymb * 95) + (quantity * 70));
});

minusBtn.addEventListener("click", () => {

    if (quantity > 1) {
        quantity--;

        quantityDisplay.textContent = quantity;

        if (pdreamPrice) {
            pdreamPrice.textContent = "$" + (quantity * 70) + ".00 AUD";
        }

        if (mbPrice) {
            mbPrice.textContent = "$" + (quantity * 95) + ".00 AUD";
        }
        totalPrice.textContent = "AU$" + ((quantitymb * 95) + (quantity * 70));
    }
});

//Cart Quanitity For Mont Blanc
plusBtnMb.addEventListener("click", () => {
    quantitymb++;

    quantityMb.textContent = quantitymb;

    mbPriceCart.textContent = "$" + (quantitymb * 95) + ".00 AUD";
    totalPrice.textContent = "AU$" + ((quantitymb * 95) + (quantity * 70));
});

minusBtnMb.addEventListener("click", () => {

    if (quantitymb > 1) {
        quantitymb--;

        quantityMb.textContent = quantitymb;

        mbPriceCart.textContent = "$" + (quantitymb * 95) + ".00 AUD";
        totalPrice.textContent = "AU$" + ((quantitymb * 95) + (quantity * 70));
    }
});

