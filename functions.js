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

function hideCart() {
    let currentElement = event.target;

    if (currentElement.classList.contains("cart-icon")) {
        return;
    }
    if (currentElement.classList.contains("cart-icon-check")) {
        return;
    }
    if (currentElement.classList.contains("cart-container")) {
        return;
    }
    if (currentElement.classList.contains("user-cart-container")) {
        return;
    }
    if (currentElement.classList.contains("cart-item")) {
        return;
    }
    if (currentElement.classList.contains("image-thumbnail")) {
        return;
    }
    if (currentElement.classList.contains("item-details")) {
        return;
    }
    if (currentElement.classList.contains("delete-icon")) {
        return;
    }
    if (currentElement.id === "cart-heading") {
        return;
    }
    if (currentElement.id === "cart-content") {
        return;
    }
    if (currentElement.id === "cart-list") {
        return;
    }
    if (currentElement.id === "empty-cart") {
        return;
    }
    if (currentElement.id === "cart-count") {
        return;
    }
    if (currentElement.id === "delete-icon-svg") {
        return;
    }
    if (currentElement.id === "checkout-btn") {
        return;
    }

    if (currentElement.parentNode.id === "cart-heading") {
        return;
    }

    let cartList = document.getElementById("cart-list");
    cartList.style.display = "none";
}

function increment() {
    let currentValue = Number(document.getElementById("quantity").value);

    document.getElementById("quantity").value = currentValue + 1;
}

function decrement() {
    let currentValue = Number(document.getElementById("quantity").value);

    if (currentValue - 1 > 0) {
        document.getElementById("quantity").value = currentValue - 1;
    } else if (currentValue - 1 === 0) {
        document.getElementById("quantity").value = 0;
    }
}

function addToCart() {
    let quantity = Number(document.getElementById("quantity").value);

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

    let cartCountBubble = document.getElementById("cart-count");
    cartCountBubble.style.display = "inline-block";
    cartCountBubble.innerHTML = quantity;
}

function removeFromCart() {
    let parentDiv = document.getElementsByClassName("cart-item")[0];
    parentDiv.style.display = "none";

    let checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.style.display = "none";

    let emptyCartText = document.getElementById("empty-cart");
    emptyCartText.style.display = "block";

    let cartCountBubble = document.getElementById("cart-count");
    cartCountBubble.innerHTML = 0;
    cartCountBubble.style.display = "none";

    let quantity = document.getElementById("quantity");
    quantity.value = 0;
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