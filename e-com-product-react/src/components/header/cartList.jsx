import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import CartItem from "./cartItem";

import { CartListContainer, CartHeadingCont, CartHeading, CartContent, EmptyCardP, CheckoutBtn } from './cartList.styles';

function CartList(){
    const cartInfo = useContext(CartContext);
    const prodQuantity = cartInfo.cart.productQuantity;

    return(
        <CartListContainer>
            <CartHeadingCont>
                <CartHeading>Cart</CartHeading>
            </CartHeadingCont>
            <CartContent style={prodQuantity > 0 ? {display: 'flex', justifyContent: 'space-between', height: '44%'} : {}}>
                {
                    prodQuantity > 0
                    ? 
                    <>
                        <CartItem />
                        <CheckoutBtn>Checkout</CheckoutBtn>
                    </>
                    :
                    <EmptyCardP>
                        Your cart is empty.
                    </EmptyCardP>
                }
            </CartContent>
        </CartListContainer>
    )
}

export default CartList;