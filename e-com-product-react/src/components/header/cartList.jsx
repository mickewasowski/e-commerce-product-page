import CartItem from "./cartItem";

import { CartListContainer, CartHeadingCont, CartHeading, CartContent, EmptyCardP, CheckoutBtn } from './cartList.styles';

function CartList(){

    return(
        <CartListContainer>
            <CartHeadingCont>
                <CartHeading>Cart</CartHeading>
            </CartHeadingCont>
            <CartContent>
                <CartItem />
                <CheckoutBtn style={{display: 'none'}}>Checkout</CheckoutBtn>
                <EmptyCardP>
                    Your cart is empty.
                </EmptyCardP>
            </CartContent>
        </CartListContainer>
    )
}

export default CartList;