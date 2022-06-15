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

