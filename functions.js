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

