function expandCartList() {
    let cartList = document.getElementById("cart-list");

    let style = window.getComputedStyle(cartList);
    let displayValue = style.getPropertyValue('display');

    if (displayValue === 'flex') {
        cartList.style.display = 'none';
    } else {
        cartList.style.display = 'flex';
    }
}

function increment() {
    let currentValue = Number(document.getElementById("quantity").innerHTML);

    document.getElementById("quantity").innerHTML = currentValue + 1;
}

function decrement() {
    let currentValue = Number(document.getElementById("quantity").innerHTML);

    if (currentValue - 1 > 0) {
        document.getElementById("quantity").innerHTML = currentValue - 1;
    } else if (currentValue - 1 === 0) {
        document.getElementById("quantity").innerHTML = 0;
    }
}

function addToCart() {
    let quantity = Number(document.getElementById("quantity").innerHTML);

    if (quantity === 0) {
        return;
    }

    let parentDiv = document.getElementsByClassName("cart-item")[0];
    parentDiv.style.display = "flex";

    let h5Parent = document.getElementsByClassName("item-details")[0];

    let getH5Element = document.getElementById("items-price");

    if (getH5Element !== null) {
        h5Parent.removeChild(getH5Element);
    }

    let pricePerUnit = 125;
    let total = quantity * pricePerUnit;

    let h5Element = document.createElement('h5');
    h5Element.setAttribute("id", "items-price");

    h5Element.innerHTML = `$${pricePerUnit}.00 x ${quantity}&nbsp;<strong>$${total}.00</strong>`;
    h5Element.style.display = "flex";

    let emptyCartText = document.getElementById("empty-cart");
    emptyCartText.style.display = "none";
    h5Parent.appendChild(h5Element);

    let checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.style.display = "block";
}

function removeFromCart() {
    let parentDiv = document.getElementsByClassName("cart-item")[0];
    parentDiv.style.display = "none";

    let checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.style.display = "none";

    let emptyCartText = document.getElementById("empty-cart");
    emptyCartText.style.display = "block";
}

function selectImage() {
    let currentId = Number(event.target.id);

    let bigElements = Array.from(document.getElementsByClassName("big-image"));

    let previous = bigElements.find(x => x.style.display === "block");
    previous.style.display = "none";

    let next = bigElements[currentId - 1];
    next.style.display = "block";

    let currentThumbImg = document.getElementsByClassName("focus-img")[0];
    currentThumbImg.classList.remove("focus-img")

    let parentThumbImgDiv = currentThumbImg.parentElement;
    parentThumbImgDiv.classList.remove("focus-container");

    let selectedThumbImg = document.getElementById(currentId);
    selectedThumbImg.classList.add("focus-img");

    let selectedParent = selectedThumbImg.parentElement;
    selectedParent.classList.add("focus-container");
}