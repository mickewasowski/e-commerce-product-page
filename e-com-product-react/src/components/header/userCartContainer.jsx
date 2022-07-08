import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

import CartList from "./cartList";
import {UserCartContainer as UserCartCont, CartButton, CartIcon, CartCount, UserIconContainer, UserImg} from './userCartContainer.styles';

function UserCartContainer(){
    const {cart} = useContext(CartContext);
    
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        if (!isCartOpen) {
            setIsCartOpen(true);
        }else{
            setIsCartOpen(false);
        }
    }

    return(
        <UserCartCont>
            {
                cart.productQuantity > 0
                ? <CartCount>{cart.productQuantity}</CartCount>
                : ''
            }
            <CartButton onClick={toggleCart}>
                <CartIcon />
            </CartButton>
            {
                isCartOpen 
                ? <CartList/>
                : ''
            }
            <UserIconContainer>
                <UserImg src="/images/image-avatar.png" />
            </UserIconContainer>
        </UserCartCont>
    )
}

export default UserCartContainer;